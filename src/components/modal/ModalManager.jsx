import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import LoginForm from "components/form/LoginFom";
import SignupForm from "components/form/SignupForm";
import MainModal from "./MainModal";
const ModalManager = () => {
  const modal = useSelector((state) => state.modal);
  const { isOpen, typeModal } = modal;
  const modalList = { LoginForm, SignupForm };
  function RenderComponent() {
    if (typeModal) {
      const SelectedComponent = modalList[typeModal];
      return <SelectedComponent></SelectedComponent>;
    }
  }
  return (
    <Fragment>
      {isOpen && (
        <MainModal>
          <RenderComponent></RenderComponent>
        </MainModal>
      )}
    </Fragment>
  );
};

export default ModalManager;
