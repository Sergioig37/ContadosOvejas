import React from "react";


export const SheepList = ({ovejas}) => {
  

    

  return (
    <>
    {/**Cuidadín, el elemento después de la coma es el index, si solo es un elemento va a pillar el primer elemento del map*/}
      {ovejas.map((oveja, index) => {
        {/**C*/}
        return <div key={index}>
            <img src={oveja} className="sheep__img" alt="" />
        </div>;
      })}
    </>
  );
};
