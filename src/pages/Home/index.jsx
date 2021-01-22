//* Dependências
import React, { useState } from "react";

//* Imagens
import Logo from "../../assets/images/logo.svg";
import Income from "../../assets/images/income.svg";
import Expense from "../../assets/images/expense.svg";
import Total from "../../assets/images/total.svg";
import Remove from "../../assets/images/minus.svg";

//* Estilo local
import "./styles.css";
import Modal from "../../components/UI/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div id="page-home">
        <header>
          <img id="logo" src={Logo} alt="Logomarca Dev Fincances" />
        </header>

        <main className="container">
          <section id="balance">
            <h2 className="sr-only">Balanço</h2>

            <div className="card">
              <h3>
                <span>Entradas</span>
                <img src={Income} alt="Imagem de Entradas" />
              </h3>
              <p>R$ 5.000,00</p>
            </div>

            <div className="card">
              <h3>
                <span>Saídas</span>
                <img src={Expense} alt="Imagem de Saídas" />
              </h3>
              <p>R$ 2.000,00</p>
            </div>

            <div className="card total">
              <h3>
                <span>Total</span>
                <img src={Total} alt="Imagem de Total" />
              </h3>
              <p>R$ 3.000,00</p>
            </div>
          </section>

          <section id="transaction">
            <h2 className="sr-only">Transações</h2>

            <button className="button new" onClick={() => setModal(true)}>
              + Nova Transação
            </button>

            <table id="transactions-table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Data</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="description">Luz</td>
                  <td className="expense">- R$ 500,00</td>
                  <td className="date">23/01/2021</td>
                  <td>
                    <img src={Remove} alt="Remover transação" />
                  </td>
                </tr>

                <tr>
                  <td className="description">Criação de Website</td>
                  <td className="income">+ R$5.000,00</td>
                  <td className="date">29/01/2021</td>
                  <td>
                    <img src={Remove} alt="Remover transação" />
                  </td>
                </tr>

                <tr>
                  <td className="description">Upgrade do PC</td>
                  <td className="expense">- R$1.500,00</td>
                  <td className="date">05/01/2021</td>
                  <td>
                    <img src={Remove} alt="Remover transação" />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>

        <footer>
          <p>dev.finance$</p>
        </footer>
      </div>

      <Modal state={Boolean(modal)} close={() => setModal(false)}>
        <div id="form">
          <h2>Nova Transação</h2>
          <form action="">
            <div className="input-group">
              <label htmlFor="description" className="sr-only">
                Descrição
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>

            <div className="input-group">
              <label htmlFor="amount" className="sr-only">
                Descrição
              </label>
              <input
                type="number"
                step="0.01"
                id="amount"
                name="amount"
                placeholder="0,00"
              />
              <small className="help">
                Use o sinal "-" (negativo) para despesas e "," para casas
                decimais.
              </small>
            </div>

            <div className="input-group">
              <label htmlFor="date" className="sr-only">
                Data
              </label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group actions">
              <button
                type="button"
                className="button cancel"
                onClick={() => setModal(false)}
              >
                Cancelar
              </button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Home;
