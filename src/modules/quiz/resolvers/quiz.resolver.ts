import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateQuizDto, CreateQuizResultDto, UpdateQuizDto } from '../interfaces/quiz.dto'
import { Quiz, QuizResult, QuizWithQuestion } from '../models/quiz.model'
import { QuizService } from '../services/quiz.service'

@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @Query(() => [Quiz])
  async getQuizzes() {
    return this.quizService.getAllQuizzes()
  }

  @Query(() => QuizWithQuestion)
  async getQuiz(@Args('id') id: string) {
    return this.quizService.getQuizById(id)
  }

  @Mutation(() => Quiz)
  async createQuiz(@Args('data') data: CreateQuizDto) {
    return this.quizService.createQuiz(data)
  }

  @Mutation(() => Quiz)
  async updateQuiz(@Args('id') id: string, @Args('data') data: UpdateQuizDto) {
    return this.quizService.updateQuiz(id, data)
  }

  @Mutation(() => Boolean)
  async deleteQuiz(@Args('id') id: string) {
    return this.quizService.deleteQuiz(id)
  }

  @Mutation(() => QuizResult)
  async createQuizResult(@Args('data') data: CreateQuizResultDto) {
    return this.quizService.createQuizResult(data, '1') // TODO: get user id from context
  }

  @Query(() => [QuizResult])
  async getQuizResults() {
    return this.quizService.getQuizResultsByUser('1') // TODO: get user id from context
  }
}
