import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {

  // const httpsOptions = {
  //   key: fs.readFileSync(process.env.PRIVKEY),
  //   cert: fs.readFileSync(process.env.CERT),
  // };

  const corsOptions = {
    origin: ['http://127.0.0.1:5500', 'https://dev-passion76.fr'],
  };

  const app = await NestFactory.create(AppModule, {});

  // httpsOptions,
  app.enableCors(corsOptions);

  await app.listen(process.env.PORT);
}
bootstrap();
