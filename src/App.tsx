import { Ejercicio1 } from "./EjerciciosTipescript/Ejercicio1";
import { Ejercicio2 } from "./EjerciciosTipescript/Ejercicio2";
import { Ejercicio5 } from "./EjerciciosTipescript/Ejercicio5";
import { Ejercicio4 } from './EjerciciosTipescript/Ejercicio4';
import { Ejercicio3 } from "./EjerciciosTipescript/Ejercicio3";

//Componentes funcionales React
const App =() => {
  return (
    <div className="mt-2">
  <h1> Deber I</h1>
  <hr />
  <Ejercicio1/>
  <Ejercicio2/>
  <Ejercicio3/>
  <Ejercicio4/>
  <Ejercicio5/>
  
  </div>
  )
}
export default App;

