import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));
  await app.listen(4000);

  Logger.log('runnnning')

  
}
bootstrap();
