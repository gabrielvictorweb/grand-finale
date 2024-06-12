import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ListTasksDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  orderBy: string;
}
