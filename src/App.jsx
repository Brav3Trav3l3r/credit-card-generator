import Container from "./components/Container";
import styles from "./App.module.css";
import CardsContainer from "./components/Card/CardsContainer";
import CardFront from "./components/Card/CardFront";
import CardBack from "./components/Card/CardBack";
import Form from "./components/Form/Form";
import FormContainer from "./components/Form/FormContainer";
import { useEffect, useState } from "react";

let firstTimeLoad = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firstTimeLoad = false;
    console.log(user);
  }, [user]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.gradient}></div>
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
