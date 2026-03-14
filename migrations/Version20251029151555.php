<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251029151555 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE product (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, list_uuid VARCHAR(255) DEFAULT NULL, bought BOOLEAN DEFAULT NULL, date VARCHAR(50) DEFAULT NULL, user VARCHAR(50) DEFAULT NULL, uuid VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE TABLE shoppinglist (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, description VARCHAR(255) DEFAULT NULL, uuid VARCHAR(255) DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, date VARCHAR(50) DEFAULT NULL, user VARCHAR(50) DEFAULT NULL)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE shoppinglist');
    }
}
