import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MomentsService } from './moments.service';
import { CreateMomentDto } from './dto/create-moment.dto';
import { UpdateMomentDto } from './dto/update-moment.dto';

@Controller('moments')
export class MomentsController {
  constructor(private readonly momentsService: MomentsService) {}

  @Get()
  findAll() {
    return this.momentsService.findAll();
  }

  @Post()
  create(@Body() createMomentDto: CreateMomentDto) {
    return this.momentsService.create(createMomentDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMomentDto: UpdateMomentDto) {
    return this.momentsService.update(id, updateMomentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.momentsService.remove(id);
  }
}
