import { Injectable } from '@nestjs/common'
import { Quiz, QuizResult } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import { CreateQuizDto, CreateQuizResultDto, UpdateQuizDto } from '../interfaces/quiz.dto'
import { GetAllQuizzes, GetQuiz, GetQuizResults } from '../interfaces/quiz.interface'

@Injectable()
export class QuizService {
  constructor(private readonly prismaService: PrismaService) {}

  async createQuiz(data: CreateQuizDto): Promise<Quiz> {
    const { questions, ...quizData } = data

    await this.prismaService.trainingModule.findUniqueOrThrow({
      where: { id: quizData.moduleId }
    })

    return this.prismaService.quiz.create({
      data: {
        ...quizData,
        questions: {
          create: questions
        }
      }
    })
  }

  async updateQuiz(id: string, data: UpdateQuizDto): Promise<Quiz> {
    await this.prismaService.quiz.findUniqueOrThrow({
      where: { id }
    })

    const { ...quizData } = data

    return this.prismaService.quiz.update({
      where: { id },
      data: {
        ...quizData
        // questions: {
        //   upsert: questions.map(question => ({
        //     where: { id: question.id },
        //     update: question,
        //     create: question
        //   }))
        // }
      }
    })
  }

  async deleteQuiz(id: string): Promise<boolean> {
    await this.prismaService.quiz.findUniqueOrThrow({
      where: { id }
    })

    await this.prismaService.quiz.delete({
      where: { id }
    })
    return true
  }

  async getAllQuizzes(): Promise<GetAllQuizzes[]> {
    return this.prismaService.quiz.findMany({
      select: {
        id: true,
        name: true,
        module: {
          select: {
            id: true,
            name: true
          }
        },
        createdAt: true,
        updatedAt: true
      }
    })
  }

  async getQuizById(id: string): Promise<GetQuiz> {
    return this.prismaService.quiz.findUniqueOrThrow({
      where: { id },
      select: {
        id: true,
        name: true,
        module: {
          select: {
            id: true,
            name: true
          }
        },
        questions: {
          select: {
            id: true,
            title: true,
            options: true
          }
        },
        createdAt: true,
        updatedAt: true
      }
    })
  }

  async createQuizResult(data: CreateQuizResultDto, userId: string): Promise<QuizResult> {
    await this.prismaService.quiz.findUniqueOrThrow({
      where: { id: data.quizId }
    })

    return this.prismaService.quizResult.create({
      data: {
        quizId: data.quizId,
        score: data.score,
        userId
      }
    })
  }

  async getQuizResultsByUser(userId: string): Promise<GetQuizResults[]> {
    return this.prismaService.quizResult.findMany({
      where: { userId },
      select: {
        id: true,
        score: true,
        quiz: {
          select: {
            id: true,
            name: true,
            module: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        createdAt: true
      }
    })
  }
}
