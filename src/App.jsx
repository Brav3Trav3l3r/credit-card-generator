import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Container from "./components/Container";
import styles from "./App.module.css";
import CardsContainer from "./components/Card/CardsContainer";
import CardFront from "./components/Card/CardFront";
import CardBack from "./components/Card/CardBack";
import Form from "./components/Form/Form";
import FormContainer from "./components/Form/FormContainer";
import Toast from "./components/Toast";

let firstTimeLoad = true;

function App() {
  const [user, setUser] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    firstTimeLoad = false;
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [user]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.gradient}></div>
        {showToast &&
          createPortal(<Toast />, document.getElementById("toast-root"))}
        <Container>
          <CardsContainer>
            <CardFront firstTimeLoad={firstTimeLoad} user={user} />
            <CardBack firstTimeLoad={firstTimeLoad} user={user} />
          </CardsContainer>
          <FormContainer>
            <Form firstTimeLoad={firstTimeLoad} setUser={setUser} />
          </FormContainer>
        </Container>
      </main>
    </>
  );
}

export default App;
