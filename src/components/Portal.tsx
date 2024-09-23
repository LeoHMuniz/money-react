import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react"
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
                        <button className="buttonIn"><ArrowCircleUp size={18} />Entrada</button>
                        <button className="buttonOut"><ArrowCircleDown size={18} />Saída</button>
                    </div>
                    <button className="portalSignIn">
                        Cadastrar
                    </button>
                </div>
        </section>


    )
}
