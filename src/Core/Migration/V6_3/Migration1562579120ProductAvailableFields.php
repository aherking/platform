<?php declare(strict_types=1);

namespace Shopware\Core\Migration\V6_3;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

/**
 * @deprecated tag:v6.5.0 - reason:becomes-internal - Migrations will be internal in v6.5.0
 */
class Migration1562579120ProductAvailableFields extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1562579120;
    }

    public function update(Connection $connection): void
    {
        $connection->executeStatement('ALTER TABLE `product` CHANGE `stock` `stock` int(11) NOT NULL AFTER `ean`;');
        $connection->executeStatement('ALTER TABLE `product` ADD `available_stock` int(11) NULL AFTER `stock`;');
        $connection->executeStatement('ALTER TABLE `product` ADD `available` tinyint(1) NOT NULL DEFAULT 1 AFTER `available_stock`;');
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}
