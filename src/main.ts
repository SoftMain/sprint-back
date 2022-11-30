import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:5173',
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('SoftMain REST API')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('SoftMain')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
}

start();
