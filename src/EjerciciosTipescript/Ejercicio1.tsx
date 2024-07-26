

export const Ejercicio1 = () => {
  const multiplicar = (lado: number): number => {
    return lado * lado;
  }


  return (
    <div>
      <h3>Ejercicio 1</h3>
      <span>El Area del cuadrado es:{multiplicar(25)}</span>
    </div>
  )
}



