import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { json, urlencoded } from 'express'
import helmet from 'helmet'
import * as morgan from 'morgan'

import { ConfigurationService } from '@infrastructure/configuration/services/configuration.service'
import { LoggerService } from '@infrastructure/logger/services/logger.service'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigurationService)
  const logger = app.get(LoggerService)

  // app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  // app.enableVersioning({ type: VersioningType.URI });

  // Middlewares
  app.use(morgan('dev'))
  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))
  app.use(helmet({ contentSecurityPolicy: false }))
  app.enableCors()

  await app.listen(config.appConfig.port)
  logger.info(`🚀 Application is running on: ${await app.getUrl()}`, 'bootstrap')
}
bootstrap()
