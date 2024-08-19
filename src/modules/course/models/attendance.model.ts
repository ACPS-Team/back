import { Field, ID, ObjectType } from '@nestjs/graphql'
import { AttendanceStatus } from '@prisma/client'

// import { User } from '@modules/user/models/user.model'
import { TrainingCourse } from './course.model'

@ObjectType()
export class Attendance {
  @Field(() => ID)
  id: string

  @Field()
  date: Date

  @Field(() => AttendanceStatus)
  status: AttendanceStatus

  @Field({ nullable: true })
  justification?: string

  @Field(() => TrainingCourse)
  course: TrainingCourse

  //   @Field(() => User)
  //   user: User // TODO: Add user model

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
