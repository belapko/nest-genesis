import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    // origin: ['https://vue-genesis.vercel.app'],
    // methods: ['GET', 'POST', 'OPTIONS'],
    // allowedHeaders: ['X-Client-Id', 'Content-Type', 'Authorization'],
    // credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
