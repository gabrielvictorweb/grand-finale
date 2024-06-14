import { Text, View } from "@/components/Themed";
import type { Task as ITask } from "@/services/tasks/interfaces";
import type React from "react";
import { TouchableOpacity } from "react-native";

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
    <TouchableOpacity onPress={onClick}>
      <View
        style={{ padding: 20 }}
        darkColor="rgba(255,255,255,0.1)"
        lightColor="#fff"
      >
        <Text style={{ fontSize: 20 }} darkColor="#666">
          {limitWord(title, 20)}
        </Text>
        <Text darkColor="#666">{limitWord(description, 20)}</Text>
        <Text style={{ textAlign: "right" }} darkColor="#666">
          Data Limite: {limit}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
