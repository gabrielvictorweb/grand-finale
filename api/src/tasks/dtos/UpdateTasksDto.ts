import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsUrl } from 'class-validator';

export class UpdateTasksDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsUrl()
    description: string;  
    
    @ApiProperty()
    @IsUrl()
    limit_time: string;  
}