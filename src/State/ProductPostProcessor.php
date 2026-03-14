<?php

namespace App\State;

use Symfony\Component\Uid\Uuid;
use App\Entity\Product;
use ApiPlatform\Metadata\Operation;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use ApiPlatform\State\ProcessorInterface;

class ProductPostProcessor implements ProcessorInterface
{
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.persist_processor')]
        private ProcessorInterface $persistProcessor
    )
    {

    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        if ($data instanceof Product) {
            $data->setUuid(Uuid::v7());
        }
        return $this->persistProcessor->process($data, $operation, $uriVariables, $context);
    }
}