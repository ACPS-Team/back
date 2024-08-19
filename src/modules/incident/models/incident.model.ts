import { Field, ID, ObjectType } from '@nestjs/graphql'

import { Airplane } from '@modules/airplane/models/airplane.model'

@ObjectType()
export class Incident {
  @Field(() => ID)
  id: string

  @Field(() => Airplane)
  airplane: Airplane

  @Field()
  description: string

  @Field()
  date: Date

  @Field()
  mitigation: string

  @Field()
  isAnonymized: boolean

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
