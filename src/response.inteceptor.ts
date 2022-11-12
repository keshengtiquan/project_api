import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { map } from 'rxjs'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    let message = ''
    return next.handle().pipe(
      map((data) => {
        return {
          code: 200,
          message: '请求成功',
          data,
        }
      }),
    )
  }
}
