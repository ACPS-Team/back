import { Module } from '@nestjs/common'

import { QuizResolver } from './resolvers/quiz.resolver'
import { QuizService } from './services/quiz.service'

@Module({
  providers: [QuizResolver, QuizService]
})
export class QuizModule {}
