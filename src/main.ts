import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  // app.useBodyParser('json', { limit: '10mb' });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

