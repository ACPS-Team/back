import { Module } from '@nestjs/common'

import { MaintenanceResolver } from './resolvers/maintenance.resolver'
import { MaintenanceService } from './services/maintenance.service'

@Module({
  providers: [MaintenanceResolver, MaintenanceService]
})
export class MaintenanceModule {}
