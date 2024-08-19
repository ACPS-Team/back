import { Field, ID, ObjectType } from '@nestjs/graphql'

import { Incident } from '@modules/incident/models/incident.model'
import { Maintenance } from '@modules/maintenance/models/maintenance.model'

@ObjectType()
export class Airplane {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  serialNumber: string

  @Field(() => [Maintenance])
  maintenanceLogs: Maintenance[]

  @Field(() => [Incident])
  incidents: Incident[]

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
