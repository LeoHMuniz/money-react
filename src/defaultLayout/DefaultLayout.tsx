import '../styles/DefaultLayout.scss'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import React, { useState } from 'react';

export type transaction = {
    name: string,
    price: string,
    category: string,
}

const transactions: Array<transaction> = [];

export const transactionContext = React.createContext();

export default function DefaultLayout() {

    const [transactionList, setTransactionList] = useState(transactions);

    return (
        <transactionContext.Provider value={[transactionList, setTransactionList]}>
            <section className="DefaultLayoutContainer">
                <Header />
                <main className="DefaultLayout">
                    <Outlet />
                </main>
            </section>
        </transactionContext.Provider>
    )
}
