import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { MomentsModule } from './moments/moments.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, MomentsModule],
})
export class AppModule {}
