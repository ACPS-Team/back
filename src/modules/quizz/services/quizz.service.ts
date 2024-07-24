import { Injectable } from '@nestjs/common'
import { Quizzes } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import { GetQuizzById } from '../interfaces/quizz.interface'

@Injectable()
export class QuizzService {
  constructor(private readonly prismaService: PrismaService) {}

  async getQuizz(): Promise<Quizzes[]> {
    // return await this.prismaService.quizzes.findMany({
    //   include: {
    //     questions: true,
    //   },
    // });
    return [
      {
        id: '1',
        title: 'Quizz 1',
        description: 'Description 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
        // questions: [
        //   {
        //     id: "1",
        //     question: "Question 1",
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     deletedAt: null,
        //   },
        //   {
        //     id: "2",
        //     question: "Question 2",
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     deletedAt: null,
        //   },
        // ],
      },
      {
        id: '2',
        title: 'Quizz 2',
        description: 'Description 2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
        // questions: [
        //   {
        //     id: "1",
        //     question: "Question 1",
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     deletedAt: null,
        //   },
        //   {
        //     id: "2",
        //     question: "Question 2",
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     deletedAt: null,
        //   },
        // ],
      }
    ]
  }

  async getQuizzById(id: string): Promise<GetQuizzById | null> {
    return await this.prismaService.quizzes.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        title: true,
        description: true,
        questions: {
          select: {
            id: true,
            question: true
            // answers: {
            //   select: {
            //     id: true,
            //     answer: true,
            //     isCorrect: true,
            //   },
            // },
          }
        }
      }
    })
  }
}
