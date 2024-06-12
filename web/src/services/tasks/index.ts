import api from "@/api";
import { Task } from "./interfaces";

const getTasks = async (orderBy?: string): Promise<Task[]> => {
  const { data } = await api.get(
    `/tasks${orderBy ? `?orderBy=${orderBy}` : ""}`
  );

  return data;
};

const getTask = async (id: string): Promise<Task> => {
  const { data } = await api.get(`/tasks/${id}`);

  return data;
};

const saveTask = async (task: Task): Promise<unknown> => {
  const { data } = await api.post("/tasks", task);

  return data;
};

const updateTask = async (task: Task, id: number): Promise<unknown> => {
  const { data } = await api.patch(`/tasks/${id}`, task);

  return data;
};

const deleteTask = async (id: number): Promise<unknown> => {
  const { data } = await api.delete(`/tasks/${id}`);

  return data;
};

export { getTasks, getTask, saveTask, updateTask, deleteTask };
