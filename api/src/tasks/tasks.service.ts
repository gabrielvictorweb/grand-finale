import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTasksDto } from './dtos/CreateTasksDto';
import { UpdateTasksDto } from './dtos/UpdateTasksDto';
import { ListTasksDto } from './dtos/ListTasksDto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async save(createTasksDto: CreateTasksDto): Promise<unknown> {
    return this.prisma.task.create({ data: createTasksDto });
  }

  async update(updateTasksDto: UpdateTasksDto, id: number): Promise<Task> {
    return this.prisma.task.update({ where: { id }, data: updateTasksDto });
  }

  async index(listTasksDto: ListTasksDto): Promise<Task[]> {
    const order: Prisma.TaskOrderByWithRelationInput =
      listTasksDto.orderBy === 'title'
        ? { title: 'asc' }
        : { limit_time: 'asc' };

    return this.prisma.task.findMany({ orderBy: order });
  }

  async find(id: number): Promise<Task> {
    return this.prisma.task.findUniqueOrThrow({ where: { id: id } });
  }

  async delete(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id: id } });
  }
}
