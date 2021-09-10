import React, { useRef } from "react";
import { useState } from "react";
import Sidebar from "../components/sideBar";

import styles from "../styles/css/transferencia.module.scss";

const Transferencia: React.FC = () => {
  const [metodo, setMetodo] = useState<string>("ted");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const agenciaRef = useRef<any>();
  const chaveRef = useRef<any>();
  const contaRef = useRef<any>();
  const valorRef = useRef<any>();

  return (
    <div className={styles.pageTransferencia}>
      <Sidebar />
      <main className={styles.main}>
        <h1>Transferencia</h1>
        <div className={styles.card}>
          <h2>Escolha o metodo de transferencia</h2>
          <div className={styles.cardButton}>
            <button onClick={() => setMetodo("TED")}>TED / DOC</button>
            <button onClick={() => setMetodo("PIX")}>PIX</button>
          </div>
          <div>
            {metodo == "TED" ? (
              <div className={styles.forms}>
                <h3>{metodo}</h3>
                <form className={styles.dados}>
                  <label htmlFor="agencia">
                    <b>Agencia:</b>
                  </label>
                  <input type="text" name="agencia" ref={agenciaRef} required />
                  <label htmlFor="conta">
                    <b>Conta:</b>
                  </label>
                  <input type="text" name="conta" ref={contaRef} required />
                  <label htmlFor="valor">
                    <b>Valor:</b>
                  </label>
                  <input type="number" name="valor" ref={valorRef} required />
                  <button disabled={loading} type="submit">
                    Transferir
                  </button>
                  <strong hidden={!error}>Error: {error}</strong>
                </form>
              </div>
            ) : (
              <div className={styles.forms}>
                <h3>{metodo}</h3>
                <form className={styles.dados}>
                  <label htmlFor="chave">
                    <b>Chave:</b>
                  </label>
                  <input type="text" name="chave" ref={chaveRef} required />
                  <label htmlFor="valor">
                    <b>Valor:</b>
                  </label>
                  <input type="number" name="valor" ref={valorRef} required />
                  <button disabled={loading} type="submit">
                    Transferir
                  </button>
                  <strong hidden={!error}>Error: {error}</strong>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transferencia;
