import { Module } from '@nestjs/common'

import { IncidentResolver } from './resolvers/incident.resolver'
import { IncidentService } from './services/incident.service'

@Module({
  providers: [IncidentResolver, IncidentService]
})
export class IncidentModule {}
