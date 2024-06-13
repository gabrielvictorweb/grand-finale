export interface Task {
  id?: number;
  title: string;
  description: string;
  limit_time: string;
}

export interface TasksResponse {
  products: Task[];
  perPage: number;
  page: number;
  total: number;
}
