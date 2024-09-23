import '../styles/DefaultLayout.scss'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
    return (
        <section className="DefaultLayoutContainer">
            <Header />
            <main className="DefaultLayout">
                <Outlet />
            </main>
        </section> 
    )
}
