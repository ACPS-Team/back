import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql'
import { AttendanceStatus } from '@prisma/client'

@InputType()
export class CreateCourseDto {
  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field()
  startDate: Date

  @Field()
  duration: number

  @Field(() => [ID])
  moduleId: string

  @Field(() => [ID], { nullable: true })
  users?: string[]
}

@InputType()
export class UpdateCourseDto {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  startDate?: Date

  @Field({ nullable: true })
  duration?: number

  @Field(() => Boolean, { nullable: true })
  isFinished?: boolean

  @Field(() => [ID], { nullable: true })
  moduleId: string
}

@InputType()
export class InviteUsersDto {
  @Field(() => [ID])
  userIds: string[]
}

@InputType()
export class UpdateAttendanceDto {
  @Field(() => AttendanceStatus)
  status: AttendanceStatus
}

registerEnumType(AttendanceStatus, {
  name: 'AttendanceStatus',
  description: 'Status of the user attendance'
})
