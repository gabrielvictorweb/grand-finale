import styled from "styled-components/native";

export const Container = styled.View``;

export const MenuContainer = styled.View`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  height: 40px;

  background-color: #000;

  h1 {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
`;

export const Content = styled.View`
  padding: 10px 20px;

  overflow: auto;
  max-height: calc(100vh - 40px - 50vh);

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Modal = styled.View`
  width: 98%;
  max-width: 800px;
  max-height: calc(100vh - 50vh);
  margin: 0 auto;

  background-color: #fff;

  border-radius: 10px;
  overflow: hidden;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const BackgroundModal = styled.View`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;
