#!/bin/sh

composer install --no-interaction 
php bin/console doctrine:database:create 
php bin/console make:migration 
php bin/console doctrine:migrations:migrate --no-interaction

php -S 0.0.0.0:8000 public/index.php