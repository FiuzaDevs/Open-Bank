import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "../components/sideBar";
import styles from "../styles/css/conta.module.scss";

// import { Container } from './styles';

const Conta: React.FC = () => {
  const [saldo, setSaldo] = useState<number>(5422.53);
  const [limite, setLimite] = useState<number>(25000);

  let history = useHistory();

  var body = [
    ["21/09", "Padaria", "50,23"],
    ["22/09", "Pizzaria", "65,23"],
    ["23/09", "Mercado", "152,78"],
    ["24/09", "Budega", "58,25"],
  ];

  const [saldoRef, setSaldoRef] = useState<string>();
  const [limiteRef, setLimiteRef] = useState<string>();

  useEffect(() => {
    setLimiteRef(
      limite.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
    setSaldoRef(
      saldo.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }, []);

  function handleClick(type: string) {
    return history.push(`/${type}`);
  }

  return (
    <div className={styles.pageConta}>
      <Sidebar />
      <main className={styles.main}>
        <section className={styles.firstCard}>
          <div className={styles.cardMoney}>
            <h3>Saldo</h3>
            <h1>
              <span className={styles.notbold}>R$</span> {saldoRef}
            </h1>
          </div>
          <div className={styles.cardMoney}>
            <h3>Limite Disponivel</h3>
            <h1>
              <span className={styles.notbold}>R$</span>
              {limiteRef}
            </h1>
          </div>
        </section>
        <section className={styles.secondCard}>
          <div className={styles.extrato}>
            <h1>Ultimos lancamentos</h1>
            <table>
              <tbody>
                {body.map((row) => (
                  <tr>
                    {row.map((val) => (
                      <td>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.lastCard}>
          <div className={styles.funButtons}>
            <button onClick={() => handleClick("Cartao")}>Cartão</button>
            <button onClick={() => handleClick("Pagamento")}>Pagar</button>
            <button onClick={() => handleClick("Transferencia")}>
              Transferencia
            </button>
            <button onClick={() => handleClick("Transferencia")}>PIX</button>
            <button onClick={() => handleClick("Configuracao")}>Conta</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Conta;
