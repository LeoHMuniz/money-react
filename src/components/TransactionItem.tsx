import { transaction } from '@/defaultLayout/DefaultLayout'
import React from 'react'

export default function TransactionItem({ transaction }: transaction) {
    return (
        <div className="TransactionItem">
            <span className="TransactionItemName">{transaction.name}</span>
            <span>{transaction.price}</span>
            <span>{transaction.category}</span>
            <span>{transaction.date}</span>
        </div>
    )
}
