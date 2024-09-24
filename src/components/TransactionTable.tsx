import { useContext } from 'react'
import '../styles/TransactionTable.scss'
import { transactionContext } from '../defaultLayout/DefaultLayout'
import { transaction } from '../defaultLayout/DefaultLayout';

export default function TransactionTable() {


    const [transactions] = useContext(transactionContext);

    return (
        <section className="TransactionTableContainer">

            {transactions.map((transaction: transaction, index: number) => {
                <div className="TransactionItem" key={index}>
                    <span className="TransactionItemName">{transaction.name}</span>
                    <span>{transaction.price}</span>
                    <span></span>

                </div>

            })}



            {/* <div className="TransactionItem">
                <span className="TransactionItemName">Desenvolvimento de Site</span>
                <span>R$ 12.000,00</span>
                <span>Venda</span>
                <span>13/04/2022</span>
            </div> */}
        </section>
    )
}
