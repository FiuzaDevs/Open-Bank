import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "../styles/css/landing.module.scss";

const Landing: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [user, setUser] = useState(false);

  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();

  function singUP(username: string, password: string) {
    if( password.length <=6){
      return setError("Senha inválido");
    }
    return setUser(true);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      singUP(usernameRef.current.value, passwordRef.current.value);
    } catch {
      setError("ERRO");
    }
    setLoading(false);
  }
  if (user === true) {
    return <Redirect to="/home" />;
  }
  return (
    <section className={styles.pageLanding}>
      <h1>
        Bem vindo a <span>Open Bank</span>
      </h1>

      <div>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <div className={styles.dados}>
            <label htmlFor="username">
              <b>Usuario:</b>
            </label>
            <input type="text" name="username" ref={usernameRef} required />
            <label htmlFor="password">
              <b>Senha:</b>
            </label>
            <input type="password" name="password" ref={passwordRef} required />
            <button disabled={loading} type="submit">
              Log in
            </button>
            <strong hidden={!error}>Error: {error}</strong>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Landing;
