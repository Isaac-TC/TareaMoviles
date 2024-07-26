import { useState } from "react"


export const Ejercicio5 = () => {
  const [valorContador, setValorContador] = useState<number>(0);
  const cambiarContador = (numero: number) => {
    setValorContador(valorContador + numero);
  }
  return (
    <div>
      <h3>Ejercicio 5</h3>
      <h3> Acumulador de 5: <small>{valorContador}</small></h3>
      <button
        className="btn btn-primary"
        onClick={() => cambiarContador(-5)}
      >
        -5
      </button>
      &nbsp;
      <button className="btn btn-primary"
        onClick={() => cambiarContador(5)}
      >
        +5
      </button>
    </div>

  )
}

