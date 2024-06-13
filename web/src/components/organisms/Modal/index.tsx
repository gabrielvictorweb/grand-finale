import React from "react";
import * as S from "./styles";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import { IModal } from "@/components/interfaces/modal";
import { IChild } from "@/templates/interfaces/default-props";

const variants = {
  open: { opacity: 1, y: 0, width: "100%" },
  closed: { opacity: 0, y: 200, width: "100%" },
};

export const Modal: React.FC<IModal & IChild> = ({
  isOpen,
  title,
  handleModal,
  children,
}) => {
  const onAnimationComplete = () => {
    if (!isOpen) {
      handleModal();
    }
  };

  const handleClickBackground = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) handleModal();
  };

  const getModal = () => {
    if (!isOpen) return <></>;

    return (
      <>
        <S.BackgroundModal />
        <S.MenuContainer onClick={handleClickBackground}>
          <motion.div
            initial={{ opacity: 0, y: 200, width: "100%" }}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.2 }}
            onAnimationComplete={onAnimationComplete}
          >
            <S.Modal>
              <S.Header>
                <h1>{title}</h1>
                <TfiClose
                  style={{ color: "#fff" }}
                  className="pointer"
                  onClick={handleModal}
                />
              </S.Header>
              <S.Content>{children}</S.Content>
            </S.Modal>
          </motion.div>
        </S.MenuContainer>
      </>
    );
  };

  return getModal();
};
