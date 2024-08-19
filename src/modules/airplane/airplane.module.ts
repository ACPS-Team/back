import { Module } from '@nestjs/common'

import { AirplaneResolver } from './resolvers/airplane.resolver'
import { AirplaneService } from './services/airplane.service'

@Module({
  providers: [AirplaneResolver, AirplaneService]
})
export class AirplaneModule {}
