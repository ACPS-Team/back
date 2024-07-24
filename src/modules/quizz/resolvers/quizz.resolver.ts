import { Args, Query, Resolver } from '@nestjs/graphql'
import { Quizzes } from '@prisma/client'

import { GetQuizzById } from '../interfaces/quizz.interface'
import { Quizz } from '../models/quizz.model'
import { QuizzService } from '../services/quizz.service'

@Resolver()
export class QuizzResolver {
  constructor(private readonly quizzService: QuizzService) {}

  @Query(() => [Quizz])
  async getQuizz(): Promise<Quizzes[]> {
    return await this.quizzService.getQuizz()
  }

  @Query(() => Quizz, { nullable: true })
  async getQuizzById(@Args('id') id: string): Promise<GetQuizzById | null> {
    return await this.quizzService.getQuizzById(id)
  }
}
