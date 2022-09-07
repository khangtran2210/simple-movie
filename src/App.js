import LoginForm from "components/form/LoginFom";
import SignupForm from "components/form/SignupForm";
import MainModal from "components/modal/MainModal";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import AppRoute from "routes/AppRoute";

import Main from "./components/layout/Main";

function App() {
  const modal = useSelector((state) => state.modal);
  return (
    <Fragment>
      <AppRoute></AppRoute>
      {/* <Test></Test> */}
      {/* <MoviePage></MoviePage> */}
      {/* <Main></Main>
      
      <MainModal>
        <LoginForm></LoginForm>
      </MainModal> */}
      {modal.isOpen && (
        <MainModal>
          {modal.isLoginOpen && <LoginForm></LoginForm>}
          {modal.isSignupOpen && <SignupForm></SignupForm>}
        </MainModal>
      )}
    </Fragment>
  );
}

export default App;
