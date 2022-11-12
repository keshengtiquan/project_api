import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ResponseInterceptor } from './response.inteceptor';
// import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';
import Validate from './common/validate';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalPipes(new Validate())
  // app.useGlobalFilters(new HttpExceptionFilter())
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
