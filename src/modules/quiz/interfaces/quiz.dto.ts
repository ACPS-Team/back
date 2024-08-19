import { Field, ID, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateQuizQuestionDto {
  @Field(() => String)
  title: string

  @Field(() => [String])
  options: string[]

  @Field(() => String)
  correctAnswer: string
}

@InputType()
export class CreateQuizDto {
  @Field()
  name: string

  @Field(() => ID)
  moduleId: string

  @Field(() => [CreateQuizQuestionDto])
  questions: CreateQuizQuestionDto[]
}

// export class UpdateQuizQuestionDto {
//   id: string
//   title?: string
//   options?: string[]
//   correctAnswer?: string
// }

@InputType()
export class UpdateQuizDto {
  @Field({ nullable: true })
  name?: string
  //   questions?: UpdateQuizQuestionDto[]
}

@InputType()
export class CreateQuizResultDto {
  @Field(() => ID)
  quizId: string

  @Field(() => Int)
  score: number
}
