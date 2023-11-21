import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen('https://user-crud-fcwm.onrender.com');

  // Cors
  app.enableCors({
    origin: 'https://user-crud-fcwm.onrender.com',
    credentials: true,
  });
}
bootstrap();
