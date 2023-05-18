import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import mylib from '@myapp/mylib'
import my_built_lib from '@myapp/my-built-lib'

// mylib()
my_built_lib()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
