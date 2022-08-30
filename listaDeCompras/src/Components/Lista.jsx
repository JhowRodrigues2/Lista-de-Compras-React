import { useState } from "react";
import "./Lista.css";
export default function Lista() {
  const [itens, setItens] = useState("");
  const [lista, setLista] = useState([]);

  const handleChangeInput = (e) => {
    setItens(e.target.value);
  };

  function salvarItem() {
    if (itens == "") {
      return alert("Campo Vazio!");
    } else {
    }
    setLista((prev) => [...prev, itens]);

    setItens("");
  }

  function removerItem(index) {
    const temporary = [...lista];
    temporary.splice(index, 1);
    setLista(temporary);
  }

  function limparLista() {
    const temporary = [...lista];
    temporary.splice(0, temporary.length);
    setLista(temporary);
  }

  return (
    <div className="container">
      <div className="main">
        <h1>Lista de Compras</h1>
        <div className="firstItens">
          <div className="inptArea">
            <input
              type="text"
              onChange={(e) => handleChangeInput(e)}
              className="inpt"
              value={itens}
            />
            <button on onClick={salvarItem} className="btSave">
              adicionar
            </button>
          </div>
          <ul>
            {lista.map((i, index) => (
              <li className="itensSalvos">
                {i}
                <button
                  className="excluirItem"
                  onClick={() => removerItem(index)}
                >
                  {" "}
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className="clear" onClick={limparLista}>
          LIMPAR LISTA
        </button>
      </div>
    </div>
  );
}
