import type { Task as ITask } from "@/services/tasks/interfaces";
import type React from "react";
import * as S from "./styles";

interface IClick {
  onClick: () => void;
}

function formatDate(date: string) {
  const stringDate = new Date(date).toISOString().split("T")[0];
  const split = stringDate.split("-");
  return `${split[2]}/${split[1]}/${split[0]}`;
}

export const Task: React.FC<ITask & IClick> = ({
  title,
  description,
  limit_time,
  onClick,
}) => {
  const limit = formatDate(limit_time);

  return (
    <S.Container onClick={onClick}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Limit>Data Limite: {limit}</S.Limit>
    </S.Container>
  );
};
