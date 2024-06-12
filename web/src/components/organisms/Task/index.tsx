import React from "react";
import * as S from "./styles";
import { Task as ITask } from "@/services/tasks/interfaces";

function limitWord(input: string, maxLength: number) {
  if (input.length > maxLength) {
    return input.substring(0, maxLength) + "...";
  }
  return input;
}

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
      <S.Title>{limitWord(title, 6)}</S.Title>
      <S.Description>{limitWord(description, 20)}</S.Description>
      <S.Limit>Data Limite: {limit}</S.Limit>
    </S.Container>
  );
};
