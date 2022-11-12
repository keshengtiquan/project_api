import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common'
import { ValidationError } from 'class-validator'

//全局管道，main中调用了
export default class Validate extends ValidationPipe {
  protected flattenValidationErrors(validationErrors: ValidationError[]): string[] {
    // const message = {}
    let message = ''
    validationErrors.forEach((error) => {
      console.log(error);
      message = Object.values(error.constraints)[0]
      // message[error.property] = Object.values(error.constraints)[0]
    })
    throw new HttpException({
      code: 422,
      message,
      
    }, HttpStatus.UNPROCESSABLE_ENTITY)
  }
}