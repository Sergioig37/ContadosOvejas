import { useState } from "react";
import { SheepList } from "./SheepList";

export const App = () => {

  
  const [listaOvejas, setListaOvejas] = useState([]);

  const addOveja = () => {
    setListaOvejas([...listaOvejas, "https://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"]);
  };

  return (
    <>
      <h3 className="title">Contador de ovejas</h3>

      <div className="wrapper">
        <h4 className="counter">{listaOvejas.length}</h4>
        <button className="button" onClick={addOveja}>Añadir oveja</button>
        <br />
        <SheepList ovejas={listaOvejas} />
      </div>
    </>
  );
};
