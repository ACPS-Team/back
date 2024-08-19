import { Module } from '@nestjs/common'

import { ReservationResolver } from './resolvers/reservation.resolver'
import { ReservationService } from './services/reservation.service'

@Module({
  providers: [ReservationResolver, ReservationService]
})
export class ReservationModule {}
