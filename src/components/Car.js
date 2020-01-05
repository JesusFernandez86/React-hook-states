import React, { useState } from "react"; //importamos useState para poder cambiar los estados

export default function Car() {
  //primero indicamos el nombre de la variable y despues el nombre de la funcion que va a cambiar el estado
  const [started, setStarted] = useState(false);
  const [countKms, setKms] = useState(0);

  const checkStatus = () => {
    if (!started) {
      return <span style={{ color: "green" }}>On</span>;
    } else {
      return <span style={{ color: "red" }}>Off</span>;
    }
  };

  const increaseKms = value => {
    if (!started) {
      setKms(countKms + value);
    } else {
      alert("the car is off");
    }
  };

  return (
    <div className="mt-2 offset-4">
      <h2> Our car is: {checkStatus()} </h2>
      <h2>Kilometers: {countKms} kms</h2>
      <button className ="btn btn-dark mr-3"
        //   para cambiar el estado creamos una funcion flecha anonima que invoque a la funcion que hemos creado antes para cambiar el estado
        //   y le pasamos los argumentos que queramos
        onClick={() => {
          setStarted(!started);
        }}
      >
        On / Off
      </button>
      <button
      className="btn btn-dark"
        onClick={() => {
          increaseKms(5);
        }}
      >
        Increase kms
      </button>
    </div>
  );
}
