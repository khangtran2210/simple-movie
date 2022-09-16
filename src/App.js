import ModalManager from "components/modal/ModalManager";
import { Fragment } from "react";

import AppRoute from "routes/AppRoute";

function App() {
  return (
    <Fragment>
      <AppRoute></AppRoute>
      {/* <Test></Test> */}
      {/* <MoviePage></MoviePage> */}
      {/* <Main></Main>
      
      <MainModal>
        <LoginForm></LoginForm>
      </MainModal> */}
      <ModalManager></ModalManager>
    </Fragment>
  );
}

export default App;
