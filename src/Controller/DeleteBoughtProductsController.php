<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DeleteBoughtProductsController extends AbstractController
{
    public function deleteBoughtProducts(
        string $listUuid,
        ProductRepository $productRepository,
        EntityManagerInterface $entityManager
    ): JsonResponse
    {
        try {
            $boughtProducts = $productRepository->findBoughtProductsByListUuid($listUuid);

            if (empty($boughtProducts)) {
                return new JsonResponse([
                    'message' => 'No bought products found for this list',
                    'deletedCount' => 0
                ], Response::HTTP_OK);
            }

            $deletedCount = 0;
            
            foreach ($boughtProducts as $product) {
                $entityManager->remove($product);
                $deletedCount++;
            }
            
            $entityManager->flush();

            return new JsonResponse([
                'message' => 'Successfully deleted all bought products',
                'deletedCount' => $deletedCount
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            return new JsonResponse([
                'error' => 'Failed to delete bought products',
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}