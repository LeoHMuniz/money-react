import { useContext } from 'react'
import '../styles/Overview.scss';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { transaction, transactionContext } from '../defaultLayout/DefaultLayout';

export const toReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', })

export default function Overview() {

    const [transactions]: transaction = useContext(transactionContext);


    const entries =
        transactions
            .filter(transaction => transaction.category == 'Lucro')
            .reduce((acc: number, transaction: transaction) => acc + transaction.price, 0).toFixed(2);

    const formatedEntries = toReal.format(entries);

    const exits =
        transactions
            .filter(transaction => transaction.category == 'Gasto')
            .reduce((acc: number, transaction: transaction) => acc + transaction.price, 0).toFixed(2);

    const formatedExits = toReal.format(exits);

    const total = entries - exits;

    const formatedTotal = toReal.format(total);

    const overviewItems =
        [{
            name: "Entradas",
            icon: <ArrowCircleUp size={32} />,
            value: formatedEntries,
            iconColor: `green`,
            // value: `R$ ${EntryValues}`
        },
        {
            name: "Saídas",
            icon: <ArrowCircleDown size={32} />,
            value: formatedExits,
            iconColor: `red`,
            // value: `R$ ${OutValues}`
        },
        {
            name: "Total",
            icon: <CurrencyDollar size={32} />,
            value: formatedTotal,
            iconColor: `white`,
            // value: `R$ ${TotalValue}`
        },
        ]


    return (
        <section className="overviewContainer" onClick={() => alert(exits)}>
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
