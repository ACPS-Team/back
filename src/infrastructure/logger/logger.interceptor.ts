/* eslint-disable no-console */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import chalk from 'chalk'
import { catchError, tap } from 'rxjs'

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest()
    const { statusCode } = context.switchToHttp().getResponse()
    const { url, method, params, query, body } = req

    console.log(chalk.yellow('Request'), { url, method, params, query, body })
    return next
      .handle()
      .pipe(
        catchError(err => {
          throw err
        })
      )
      .pipe(
        tap(data => {
          // if request url is /api/metrics
          if (url === '/api/metrics') return
          console.log(chalk.green('Response'), { statusCode, data })
        })
      )
  }
}
