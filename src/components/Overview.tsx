import React, { useContext } from 'react'
import '../styles/Overview.scss';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { transactionContext } from '../defaultLayout/DefaultLayout';

export default function Overview() {

    const [transactions, setTransactions] = useContext(transactionContext);


    const overviewItems =
        [{
            name: "Entradas",
            icon: <ArrowCircleUp size={32} />,
            value: "R$ 15.000,00",
            iconColor: `green`,
            // value: `R$ ${EntryValues}`
        },
        {
            name: "Saídas",
            icon: <ArrowCircleDown size={32} />,
            value: "R$ 15.000,00",
            iconColor: `red`,
            // value: `R$ ${OutValues}`
        },
        {
            name: "Total",
            icon: <CurrencyDollar size={32} />,
            value: "R$ 15.000,00",
            iconColor: `white`,
            // value: `R$ ${TotalValue}`
        },
        ]


    return (
        <section className="overviewContainer" onClick={() => console.log(transactions)}>
            {
                overviewItems.map((actualOverView, index) => {
                    return (
                        <div
                            key={index}
                            className="overviewCards">
                            <div className="overviewCardsTitle">
                                <span>{actualOverView.name}</span>
                                <span className={`icon ${actualOverView.iconColor}`}>{actualOverView.icon}</span>
                            </div>
                            <div className="headNumbers">{actualOverView.value}</div>
                        </div>
                    )
                })
            }
        </section>
    )
}
