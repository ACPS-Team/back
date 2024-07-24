import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Question {
  @Field(() => ID)
  id: string

  @Field(() => String)
  question: string

  //   @Field(() => [String])
  //   answers: string[];
}
@ObjectType()
export class Quizz {
  @Field(() => ID)
  id: string

  @Field(() => String)
  title: string

  @Field(() => String)
  description: string

  @Field(() => [Question])
  questions: Question[]
}
