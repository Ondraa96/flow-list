import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class MomentsService {
  constructor(private prisma: PrismaService) {}

  async getAllMoments() {
    return this.prisma.moment.findMany();
  }

  async createMoment(
    userId: string,
    text: string,
    tags: string[],
    location?: string,
  ) {
    return this.prisma.moment.create({
      data: { userId, text, tags, location },
    });
  }
}
