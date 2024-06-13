import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  margin: 1rem 0;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  word-break: break-all;

  #remove {
    background-color: red;
    border: 0;
  }

  h1 {
    font-size: 2rem;
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: #fff;
    color: #666;
    border: 1px solid #ccc;
    box-shadow: none;

    &.active {
      background-color: #666;
      color: #fff;
    }
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 1rem auto;
  max-width: 1336px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
