import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMomentDto } from './dto/create-moment.dto';
import { UpdateMomentDto } from './dto/update-moment.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MomentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.moment.findMany({ take: 50 });
  }

  async findOne(id: string) {
    const moment = await this.prisma.moment.findUnique({ where: { id } });
    if (!moment) {
      throw new NotFoundException(`Moment with ID "${id}" not found`);
    }
    return moment;
  }

  async create(data: CreateMomentDto) {
    return this.prisma.moment.create({
      data: {
        date: new Date(),
        ...data,
      },
    });
  }

  async update(id: string, data: UpdateMomentDto) {
    const moment = await this.prisma.moment.findUnique({ where: { id } });
    if (!moment) {
      throw new NotFoundException(`Moment with ID "${id}" not found`);
    }
    return this.prisma.moment.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const moment = await this.prisma.moment.findUnique({ where: { id } });
    if (!moment) {
      throw new NotFoundException(`Moment with ID "${id}" not found`);
    }
    return this.prisma.moment.delete({ where: { id } });
  }
}
