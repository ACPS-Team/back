import { Field, ID, ObjectType } from '@nestjs/graphql'

import { Airplane } from '@modules/airplane/models/airplane.model'

@ObjectType()
export class Maintenance {
  @Field(() => ID)
  id: string

  @Field(() => String)
  description: string

  @Field(() => Date)
  maintenanceDate: Date

  @Field(() => Airplane)
  airplane: Airplane

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
