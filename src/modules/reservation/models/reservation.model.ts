import { Field, ID, Int, ObjectType } from '@nestjs/graphql'

import { Airplane } from '@modules/airplane/models/airplane.model'

// import { User } from './user.model'

@ObjectType()
export class Reservation {
  @Field(() => ID)
  id: string

  @Field()
  startDate: Date

  @Field(() => Int)
  duration: number

  @Field(() => Int)
  flightDuration: number

  @Field(() => Date)
  finished_at: Date

  // @Field(() => User)
  // user: User  // TODO: Uncomment this line

  // @Field(() => User)
  // instructor: User  // TODO: Uncomment this line

  @Field(() => Airplane)
  airplane: Airplane

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
