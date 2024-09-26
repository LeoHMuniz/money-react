import { useContext } from 'react'
import '../styles/TransactionTable.scss'
import { searchContext, transactionContext } from '../defaultLayout/DefaultLayout'
import { transaction } from '../defaultLayout/DefaultLayout';
import TransactionItem from './TransactionItem';

export default function TransactionTable() {

    const [transactions] = useContext(transactionContext);
    const [search] = useContext(searchContext);

    return (
        <section className="TransactionTableContainer">
            {
                search !== "" &&
                transactions
                    .filter((transaction: transaction) => transaction.name.includes(search))
                    .map((transaction: transaction, index: number) => {
                        return (
                            <TransactionItem transaction={transaction} index={index} />
                        )
                    })
            }
            {
                search === "" &&
                transactions
                    .map((transaction: transaction, index: number) => {
                        return (
                            <TransactionItem transaction={transaction} index={index} />
                        )

                    })}
        </section>
    )
}
