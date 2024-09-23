import "../styles/Portal.scss"

export default function Portal() {
    return (


        <section className="PortalContainer">
                <div className="portalWrapper">
                        <h1>Nova transação</h1>
                    <div className="portalInputDiv">
                        <input type="text" placeholder="Descrição" />
                        <input type="text" placeholder="Preço" />
                        <input type="text" placeholder="Categoria" />
                    </div>
                    <div className="portalButtonDiv">
                        <button className="buttonIn">Entrada</button>
                        <button className="buttonOut">Saída</button>
                    </div>
                    <button className="portalSignIn">
                        Cadastrar
                    </button>
                </div>
        </section>


    )
}
