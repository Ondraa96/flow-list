import { IsString, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class CreateMomentDto {
  @IsString()
  text: string;

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsOptional()
  location?: string;

  @IsBoolean()
  @IsOptional()
  isStarred?: boolean;
}
