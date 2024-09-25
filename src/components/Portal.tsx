import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import "../styles/Portal.scss"
import { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { transactionContext } from "../defaultLayout/DefaultLayout";
import { transaction } from "../defaultLayout/DefaultLayout";

export default function Portal() {

    const [selectedButton, setSelectedButton]: number = useState(0);
    const [newTransaction, setNewTransaction]: transaction = useState({});
    const [transaction, setTransaction] = useContext(transactionContext);

    function selectThis(id: number) {
        setSelectedButton(id);
        if (id == 1) {
            setSelectedButton(1)
            newTransaction.category = 'Lucro';
        }
        if (id == 2) {
            setSelectedButton(2)
            newTransaction.category = 'Gasto';
        }
    }

    function getDataFromTransaction() {

        setTransaction((prev: transaction) => [...prev, newTransaction]);
        setNewTransaction({})

    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="PortalContainer">
                <Dialog.Content className="portalWrapper">
                    <Dialog.Close className="portalCloser Closer">
                        <X size={16} />
                    </Dialog.Close>
                    <Dialog.Title className="portalTitle">Nova transação</Dialog.Title>
                    <form className="portalInputDiv" >
                        <input placeholder="Descrição" onChange={(e) => (newTransaction.name = e.target.value)} />
                        <input type="number" placeholder="Valor" onChange={(e) => (newTransaction.price = `R$ ${parseFloat(e.target.value).toFixed(2)}`)} />
                        <input type="text" placeholder="Tipo de gasto" onChange={(e) => (newTransaction.type = e.target.value)} />
                        <input type="date" onChange={(e) => (newTransaction.date = e.target.value.replace(/-/g, "/"))} />
                    </form>
                    <div className="portalButtonDiv">
                        <button className={selectedButton == 1 ? `buttonIn selected` : `buttonIn`} onClick={() => selectThis(1)}><ArrowCircleUp size={18} className="arrow" />Entrada</button>
                        <button className={selectedButton == 2 ? `buttonOut selected` : `buttonOut`} onClick={() => selectThis(2)}><ArrowCircleDown size={18} className="arrow" />Saída</button>
                    </div>
                    <Dialog.Close className="Closer">
                        <button className="portalSignIn" onClick={() => getDataFromTransaction()}>
                            Cadastrar
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>

    )
}
