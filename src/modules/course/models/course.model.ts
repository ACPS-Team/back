import { Field, ID, ObjectType } from '@nestjs/graphql'

import { Attendance } from './attendance.model'

@ObjectType()
export class TrainingCourse {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field()
  startDate: Date

  @Field()
  duration: number

  @Field({ nullable: true })
  finished_at: Date

  @Field(() => [Attendance])
  attendances: Attendance[]

  // @Field(() => TrainingModule)
  // module: TrainingModule // TODO: Uncomment this line

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
