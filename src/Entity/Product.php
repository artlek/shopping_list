<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\QueryParameter;
use ApiPlatform\OpenApi\Model\Parameter;
use App\State\ProductPostProcessor;
use ApiPlatform\Metadata\ApiProperty;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ApiResource(
    operations: [
        new Post(
            queryParameterValidationEnabled: false, 
            processor: ProductPostProcessor::class
        ),
        new GetCollection(),
        new Delete(
            queryParameterValidationEnabled: false, 
            uriTemplate: '/products/delete/{uuid}'
        ),
        new Patch(
            queryParameterValidationEnabled: false,
            uriTemplate: '/products/edit/{uuid}',
            inputFormats: ['json' => ['application/json-patch+json']]
        ),
    ]
)]
#[QueryParameter(
    key: 'listUuid',
    required: true,
    property: 'listUuid',
    schema: ['type' => 'string'],
    openApi: new Parameter(in: 'query', name: 'listUuid', allowEmptyValue: false)
)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[ApiProperty(identifier: false)]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    #[ApiFilter(SearchFilter::class, strategy: 'exact')]
    private ?string $listUuid = null;

    #[ORM\Column(nullable: true)]
    private ?bool $bought = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $date = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $user = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[ApiProperty(identifier: true)]
    private ?string $uuid = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getlistUuid(): ?string
    {
        return $this->listUuid;
    }

    public function setlistUuid(?string $listUuid): static
    {
        $this->listUuid = $listUuid;

        return $this;
    }

    public function isBought(): ?bool
    {
        return $this->bought;
    }

    public function setBought(?bool $bought): static
    {
        $this->bought = $bought;

        return $this;
    }

    public function getDate(): ?string
    {
        return $this->date;
    }

    public function setDate(?string $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getUser(): ?string
    {
        return $this->user;
    }

    public function setUser(?string $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(?string $uuid): static
    {
        $this->uuid = $uuid;

        return $this;
    }

}
