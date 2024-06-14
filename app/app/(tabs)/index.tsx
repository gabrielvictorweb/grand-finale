import { Task } from "@/components";
import { Modal } from "@/components/Modal";
import { Text, TextInput, View } from "@/components/Themed";
import { deleteTask, getTasks, saveTask, updateTask } from "@/services/tasks";
import type { Task as ITask } from "@/services/tasks/interfaces";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button, ScrollView, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function TabOneScreen() {
  const [tasks, setTasks] = React.useState<ITask[]>();
  const [order, setOrder] = React.useState<"title" | "limit_time">("title");
  const [task, setTask] = React.useState<ITask>();
  const [add, setAdd] = React.useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ITask>();

  const onSubmit: SubmitHandler<ITask> = (data) => {
    if (task) {
      handleSubmitUpdate(data);
      return;
    }

    handleSubmitTask(data);
  };

  React.useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("limit_time", new Date(task.limit_time).toISOString());
    }
  }, [task]);

  const loadTasks = async () => {
    try {
      const data = await getTasks(order);
      setTasks(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitTask = async (values: ITask) => {
    try {
      const payload = values;

      await saveTask(payload);
      await loadTasks();

      setAdd(false);
    } catch (e) { }
  };

  const handleSubmitUpdate = async (values: ITask) => {
    try {
      if (!task?.id) return;

      const payload = values;

      await updateTask(payload, task.id);
      await loadTasks();
      setTask(undefined);
    } catch (e) { }
  };

  const handleDelete = async () => {
    try {
      if (!task?.id) return;

      await deleteTask(task.id);
      await loadTasks();
      setTask(undefined);
    } catch (e) { }
  };

  React.useEffect(() => {
    loadTasks();
  }, [order]);

  const list = () => {
    if (!tasks) return <></>;

    return tasks.map((task) => (
      <Task
        onClick={() => {
          setTask(task);
        }}
        key={task.id}
        {...task}
      />
    ));
  };

  const handleAdd = () => {
    setAdd(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Button title="Adicionar Evento" onPress={handleAdd} />

      <View
        style={{
          flexDirection: "column",
          gap: 10,
          paddingTop: 10,
          paddingBottom: 40,
          backgroundColor: "transparent",
        }}
      >
        {list()}
      </View>

      <Modal isVisible={!!task}>
        <Modal.Container>
          <Modal.Header title={task?.title ?? ""} />
          <Modal.Body>
            <View
              lightColor="#fff"
              darkColor="#111"
              style={{ gap: 10, marginTop: 20 }}
            >
              <Text lightColor="#666" darkColor="#fff">
                Título
              </Text>
              <TextInput
                lightColor="#fff"
                darkColor="#fff"
                placeholder={"Title"}
                defaultValue={task?.title}
                onChangeText={(text) => setValue("title", text)}
              />
              <Text lightColor="#666" darkColor="#fff">
                Descrição:{" "}
              </Text>
              <TextInput
                lightColor="#fff"
                darkColor="#fff"
                placeholder={"Description"}
                defaultValue={task?.description}
                onChangeText={(text) => setValue("description", text)}
              />

              <Button
                color="#dda2a2e8"
                onPress={() => setIsDatePickerVisible(true)}
                title={
                  watch("limit_time")
                    ? new Date(watch("limit_time")).toLocaleString([], {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    : "SELECIONE UMA DATA"
                }
              />

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={
                  task?.limit_time ? new Date(task?.limit_time) : new Date()
                }
                onConfirm={(date) => {
                  setValue("limit_time", date.toISOString());
                  setIsDatePickerVisible(false);
                }}
                onCancel={() => {
                  setIsDatePickerVisible(false);
                }}
              />
            </View>
          </Modal.Body>
          <Modal.Footer>
            <View
              style={{
                display: "flex",
                marginTop: 20,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Button title="CONFIRMAR" onPress={handleSubmit(onSubmit)} />
              <Button color="red" title="DELETAR" onPress={handleDelete} />
            </View>
          </Modal.Footer>
        </Modal.Container>
      </Modal>

      <Modal isVisible={add}>
        <Modal.Container>
          <Modal.Header title="Nova Tarefa" />
          <Modal.Body>
            <View
              lightColor="#fff"
              darkColor="#111"
              style={{ gap: 10, marginTop: 20 }}
            >
              <Text lightColor="#666" darkColor="#fff">
                Título
              </Text>
              <TextInput
                lightColor="#fff"
                darkColor="#fff"
                placeholder={"Title"}
                defaultValue={task?.title}
                onChangeText={(text) => setValue("title", text)}
              />
              <Text lightColor="#666" darkColor="#fff">
                Descrição:{" "}
              </Text>
              <TextInput
                lightColor="#fff"
                darkColor="#fff"
                placeholder={"Description"}
                defaultValue={task?.description}
                onChangeText={(text) => setValue("description", text)}
              />

              <Button
                color="#dda2a2e8"
                onPress={() => setIsDatePickerVisible(true)}
                title={
                  watch("limit_time")
                    ? new Date(watch("limit_time")).toLocaleString([], {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    : "SELECIONE UMA DATA"
                }
              />

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={
                  task?.limit_time ? new Date(task?.limit_time) : new Date()
                }
                onConfirm={(date) => {
                  setValue("limit_time", date.toISOString());
                  setIsDatePickerVisible(false);
                }}
                onCancel={() => {
                  setIsDatePickerVisible(false);
                }}
              />
            </View>
          </Modal.Body>
          <Modal.Footer>
            <View
              style={{
                display: "flex",
                marginTop: 20,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Button title="CONFIRMAR" onPress={handleSubmit(onSubmit)} />
              {task?.id && (
                <Button color="red" title="DELETAR" onPress={handleDelete} />
              )}
            </View>
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
