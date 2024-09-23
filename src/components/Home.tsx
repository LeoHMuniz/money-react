import '../styles/Home.scss'
import ignite from '../assets/Ignite.svg'
import Overview from './Overview'
import SearchBar from './SearchBar'
import TransactionTable from './TransactionTable'
import { Dialog } from '@radix-ui/themes'
import Portal from './Portal'

export default function Home() {
  return (
    <main className="homeContainer">
      <header className="homeHeader">
        <div>
          <img
            src={ignite}
            alt="Ícone do ignite, curso da rocketseat"
          />
          <h2 className="title"> DT Money</h2>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="btn md title">Nova transação</button>
          </Dialog.Trigger>
          <Portal />
        </Dialog.Root>
      </header>
      <Overview />
      <SearchBar />
      <TransactionTable />

    </main>
  )
}
