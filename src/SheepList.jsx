import React from "react";


export const SheepList = ({ovejas}) => {
  

    

  return (
    <>
    {/**Cuidadín, el elemento después de la coma es el index, si solo es un elemento va a pillar el primer elemento del map*/}


    <ul className="image__list">
      {ovejas.map((oveja, index) => { 
        return <li key={index}>
          <img src={oveja} className="sheep__img" alt="" />
        </li>
      })}
    </ul>
    </>
  );
};
