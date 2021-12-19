import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const CORS_OPTION = {
  origin: ["http://localhost:3300"], //* TODO :: CORS 화이트리스트 설정 파일 기재
  optionsSuccessStatus: 200,
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: CORS_OPTION});
  await app.listen(3000);
}
bootstrap();
