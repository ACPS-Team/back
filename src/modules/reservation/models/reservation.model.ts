import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { ReservationStatus } from '@prisma/client'

import { Airplane } from '@modules/airplane/models/airplane.model'

// import { User } from './user.model'

@ObjectType()
export class Reservation {
  @Field(() => ID)
  id: string

  @Field()
  startTime: Date

  @Field(() => Int)
  durationEst: number

  @Field(() => Int, { nullable: true })
  durationReal?: number

  // @Field(() => User)
  // user: User  // TODO: Uncomment this line

  @Field(() => Airplane)
  airplane: Airplane

  @Field(() => ReservationStatus)
  status: ReservationStatus

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}

registerEnumType(ReservationStatus, {
  name: 'ReservationStatus',
  description: 'Status of a reservation'
})
