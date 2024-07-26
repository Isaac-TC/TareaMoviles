
export const Ejercicio3 = () => {
    const dividendos = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const divisible = (dividendos: number[]): number[] => {
        return dividendos.map(valor => valor / 5);
    }
        return (
            <div>
                <h3>
                    Ejercicio 3
                </h3>
                <span>El resultado de la division es: {divisible(dividendos)}</span>
            </div>
        )
    }