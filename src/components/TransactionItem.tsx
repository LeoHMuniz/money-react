import { transaction } from '@/defaultLayout/DefaultLayout'
import '../styles/TransactionItem.scss'
import { toReal } from './Overview'

export default function TransactionItem({ transaction }: transaction) {

    const day = new Date(transaction.date).getDate() >= 10? new Date(transaction.date).getDate() : "0" + (new Date(transaction.date).getDate())
    const month = new Date(transaction.date).getMonth() + 1 >= 10 ? new Date(transaction.date).getMonth() + 1 : "0" + (new Date(transaction.date).getMonth() + 1)
    const year = new Date(transaction.date).getFullYear()
    const date = `${day}/${month}/${year}`;

    return (
        <div className="TransactionItem">
            <div>
                <span className="TransactionItemName">{transaction.name}</span>
            </div>
            <div>
                <span className={`${transaction.category == 'Lucro' ? 'entryStyle' : 'exitStyle'}`}> {toReal.format(transaction.price)}</span>
            </div>
            <span>{transaction.type}</span>
            <div className="dateItem">
                <span>{date}</span>
            </div>
        </div>
    )
}
