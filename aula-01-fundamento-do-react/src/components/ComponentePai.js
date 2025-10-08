import ComponenteFilho from "./ComponenteFilho";

const ComponentePai = () => {
    return(
        <>
        <div>
            <h2>Inicio do componente pai</h2>
            <ComponenteFilho />
            <h2>Fim do componente pai</h2>
        </div>
        </>
    )
}

export default ComponentePai;