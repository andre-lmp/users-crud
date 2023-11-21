import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // Cors
  app.enableCors({
    origin: 'https://user-crud-fcwm.onrender.com',
    credentials: true,
  });
}
bootstrap();
