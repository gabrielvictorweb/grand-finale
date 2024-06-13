import React from "react";
import * as S from "./styles";
import { Button, Input, Task } from "@/components";
import { Task as ITask } from "@/services/tasks/interfaces";
import { deleteTask, getTasks, saveTask, updateTask } from "@/services/tasks";
import { Modal } from "@/components/organisms/Modal";
import { Formik } from "formik";

function formatDate(date?: string) {
  if (!date) return;

  const stringDate = new Date(date).toISOString().split("T")[0];
  const split = stringDate.split("-");
  return `${split[2]}/${split[1]}/${split[0]}`;
}

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = React.useState<ITask[]>();
  const [order, setOrder] = React.useState<"title" | "limit_time">("title");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalIsOpenTask, setModalIsOpenTask] = React.useState(false);
  const [modalIsOpenUpdate, setModalIsOpenUpdate] = React.useState(false);
  const [task, setTask] = React.useState<ITask>();

  const loadTasks = async () => {
    try {
      const data = await getTasks(order);
      setTasks(data);
    } catch (e) {}
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
          handleModalTask();
        }}
        key={task.id}
        {...task}
      />
    ));
  };

  const listOne = (data?: ITask) => {
    if (!data) return <></>;

    return (
      <S.ListOne>
        <h1>{task?.title}</h1>
        <p>{task?.description}</p>
        <p>Data Limite: {formatDate(task?.limit_time)}</p>

        <Button
          onClick={() => {
            handleModalTask();
            handleModalUpdate();
          }}
          text="EDITAR TAREFA"
        />
        <Button id="remove" onClick={handleDelete} text="EXCLUIR TAREFA" />
      </S.ListOne>
    );
  };

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const handleModalUpdate = () => {
    setModalIsOpenUpdate((prev) => !prev);
  };

  const handleModalTask = () => {
    setModalIsOpenTask((prev) => !prev);
  };

  const handleSubmit = async (values: ITask) => {
    try {
      const convertDateToIso = new Date(values.limit_time);
      const payload = {
        ...values,
        limit_time: convertDateToIso.toISOString(),
      };

      const data = await saveTask(payload);
      if (data) {
        await loadTasks();

        handleModal();

        return;
      }

      throw new Error("Error when try insert task");
    } catch (e) {}
  };

  const handleSubmitUpdate = async (values: ITask) => {
    try {
      if (!task?.id) return;

      const convertDateToIso = new Date(values.limit_time);

      const payload = {
        ...values,
        limit_time: convertDateToIso.toISOString(),
      };

      const data = await updateTask(payload, task.id);
      if (data) {
        await loadTasks();

        handleModalUpdate();

        return;
      }

      throw new Error("Error when try insert task");
    } catch (e) {}
  };

  const handleDelete = async () => {
    try {
      if (!task?.id) return;

      const data = await deleteTask(task.id);
      if (data) {
        await loadTasks();

        handleModalTask();

        return;
      }

      throw new Error("Error when try insert task");
    } catch (e) {}
  };

  return (
    <S.Container>
      <S.Options>
        <Button onClick={handleModal} text="ADICIONAR TAREFA" />
        <S.Order>
          <span>Ordenar por:</span>
          <Button
            className={order === "title" ? "active" : ""}
            onClick={() => setOrder("title")}
            text="Título"
          />
          <Button
            className={order === "limit_time" ? "active" : ""}
            onClick={() => setOrder("limit_time")}
            text="Prazo"
          />
        </S.Order>
      </S.Options>

      <S.Grid>{list()}</S.Grid>

      {/* Save Task Modal */}
      <Modal
        title="Adicionar Tarefa"
        isOpen={modalIsOpen}
        handleModal={handleModal}
      >
        <Formik
          initialValues={{ title: "", description: "", limit_time: "" }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <S.Form onSubmit={handleSubmit}>
              <Input
                label="Título*:"
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                required
              />
              <Input
                label="Descrição*: "
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                required
              />
              <Input
                label="Data Limite*: "
                type="date"
                name="limit_time"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.limit_time}
                required
              />
              <Button type="submit" text="ADICIONAR TAREFA" />
            </S.Form>
          )}
        </Formik>
      </Modal>

      {/* List One Task Modal */}
      <Modal
        title={task?.title ?? ""}
        isOpen={modalIsOpenTask}
        handleModal={handleModalTask}
      >
        {listOne(task)}
      </Modal>

      {/* Update Task Modal */}
      <Modal
        title="Adicionar Tarefa"
        isOpen={modalIsOpenUpdate}
        handleModal={handleModalUpdate}
      >
        <Formik
          initialValues={{
            title: task?.title ?? "",
            description: task?.description ?? "",
            limit_time: task?.limit_time
              ? new Date(task.limit_time).toISOString().split("T")[0]
              : "",
          }}
          onSubmit={(values) => {
            handleSubmitUpdate(values);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <S.Form onSubmit={handleSubmit}>
              <Input
                label="Título*:"
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                required
              />
              <Input
                label="Descrição*: "
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                required
              />
              <Input
                label="Data Limite*: "
                type="date"
                name="limit_time"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.limit_time}
                required
              />
              <Button type="submit" text="ADICIONAR TAREFA" />
            </S.Form>
          )}
        </Formik>
      </Modal>
    </S.Container>
  );
};
