import styled from "styled-components";

type Props = {
  completed: boolean;
};

export const Wrapper = styled.div`
  width: 100%;
  background-color: #adf1ff;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 12px;
  width: 100%;
  h1 {
    text-align: center;
    color: #4aefd6;
    margin-bottom: 75px;
  }
`;

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 28px;
  color: red;
`;

export const AddTask = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
  align-items: center;
  input {
    background-color: white;
    border-radius: 20px;
    padding: 12px;
    color: black;
    flex: 1;
  }
  button {
    background-color: #4aefd6;
    border: 2px solid green;
    border-radius: 20px;
    padding: 12px;
    color: white;
    width: 139px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    input {
      width: auto;
    }
  }
`;

export const Task = styled.div<Props>`
  display: flex;
  background-color: white;
  gap: 10px;
  cursor: pointer;
  color: black;
  border-radius: 20px;
  align-items: center;
  padding: 5px 14px;
  border: ${(props) =>
    props.completed ? "2px solid green" : "2px solid orange"};
`;

export const Status = styled.p<Props>`
  cursor: pointer;
  color: ${(props) => (props.completed ? "green" : "orange")};
  text-transform: capitalize;
  border-left: ${(props) =>
    props.completed ? "2px solid green" : "2px solid orange"};
  padding-left: 20px;
  font-weight: 600;
  margin-left: auto;
`;
