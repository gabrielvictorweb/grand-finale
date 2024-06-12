import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
import { CreateTasksDto } from './dtos/CreateTasksDto';
import { UpdateTasksDto } from './dtos/UpdateTasksDto';
import { ListTasksDto } from './dtos/ListTasksDto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async saveTask(@Body() createTasksDto: CreateTasksDto) {
    return this.tasksService.save(createTasksDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id, @Body() updateTasksDto: UpdateTasksDto) {
    return this.tasksService.update(updateTasksDto, +id);
  }

  @HttpCode(HttpStatus.OK)
  @Get('')
  async getTasks(@Query() listTasksDto: ListTasksDto): Promise<Task[]> {
    return this.tasksService.index(listTasksDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getTaskById(@Param('id') id: number): Promise<Task> {
    return this.tasksService.find(+id);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async DeleteTaskById(@Param('id') id: number): Promise<unknown> {
    return this.tasksService.delete(+id);
  }
}
