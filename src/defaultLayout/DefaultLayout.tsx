import '../styles/DefaultLayout.scss'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import React, { useState } from 'react';

export type transaction = {
    name: string,
    price: number,
    category: string,
    type: string,
    date: Date,
}

const transactions: Array<transaction> = [];
const searchItem: string = "";

export const transactionContext = React.createContext();
export const searchContext = React.createContext();

export default function DefaultLayout() {

    const [transactionList, setTransactionList] = useState(transactions);
    const [search, setSearch] = useState(searchItem);

    return (
        <transactionContext.Provider value={[transactionList, setTransactionList]}>
            <searchContext.Provider value={[search, setSearch]}>
                <section className="DefaultLayoutContainer">
                    <Header />
                    <main className="DefaultLayout">
                        <Outlet />
                    </main>
                </section>
            </searchContext.Provider>
        </transactionContext.Provider>
    )
}
