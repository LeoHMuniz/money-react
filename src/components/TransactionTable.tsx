import { useContext } from 'react'
import '../styles/TransactionTable.scss'
import { transactionContext } from '../defaultLayout/DefaultLayout'
import { transaction } from '../defaultLayout/DefaultLayout';
import TransactionItem from './TransactionItem';

export default function TransactionTable() {


    const [transactions] = useContext(transactionContext);

    return (
        <section className="TransactionTableContainer" onClick={() => console.log(transactions)}>

            {
                transactions.map((transaction: transaction, index: number) => {
                    return (
                        <TransactionItem transaction={transaction} index={index} />
                        // <div className="TransactionItem" key={index} onClick={() => console.log(index)}>
                        //     <span className="TransactionItemName">{transaction.name}</span>
                        //     <span>{transactions[index].price}</span>
                        //     <span>{transactions[index].type}</span>
                        // </div>
                    )

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
