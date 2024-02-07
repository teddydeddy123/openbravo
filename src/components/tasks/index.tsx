import { useState } from "react";
import {
  Status,
  Inner,
  TasksWrapper,
  Message,
  Task,
  Wrapper,
  AddTask,
} from "./styled";

type TaskStatus = {
  description: string;
  statusComplete: boolean;
};

export const Tasks = () => {
  const [values, setValues] = useState("");
  const [tasks, setTasks] = useState<TaskStatus[]>([]);

  const updateTask = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        statusComplete: !updatedTasks[index].statusComplete,
      };
      return updatedTasks;
    });
  };

  const deleteTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.statusComplete));
  };
  return (
    <Wrapper>
      <Inner>
        <h1>TODO LIST</h1>
        <AddTask>
          <input
            placeholder="Task description"
            id="description"
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
          <button
            onClick={() => {
              setTasks((prevTasks) => [
                ...prevTasks,
                {
                  description: values,
                  statusComplete: false,
                },
              ]);
              setValues("");
            }}
          >
            Add Task
          </button>
        </AddTask>
        <TasksWrapper>
          {tasks.length > 0 ? (
            <>
              {tasks.map((task, i) => (
                <Task
                  key={i}
                  completed={task.statusComplete}
                  onClick={() => updateTask(i)}
                >
                  <p>{task.description}</p>
                  <Status completed={task.statusComplete}>
                    {task.statusComplete ? "Complete" : "Progress"}
                  </Status>
                </Task>
              ))}
              <button onClick={deleteTasks}>Delele completed tasks</button>
            </>
          ) : (
            <Message>No tasks added</Message>
          )}
        </TasksWrapper>
      </Inner>
    </Wrapper>
  );
};

export default Tasks;
