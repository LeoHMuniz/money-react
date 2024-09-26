import { MagnifyingGlass } from 'phosphor-react'
import '../styles/SearchBar.scss'
import { useContext, useState } from 'react'
import { searchContext } from '@/defaultLayout/DefaultLayout'
import { SelectDemo } from './Select';

export default function SearchBar() {

  const [search, setSearch] = useContext(searchContext);
  const [searchValue, setSearchValue] = useState("");

  setTimeout(() => {
    setSearch(searchValue)
  }, 1500);

  return (
    <section className="searchBarContainer">
      <input type="text" className="searchBar input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Busque uma transação" />
      <SelectDemo />
      {/* <button className="search"><MagnifyingGlass size={20} weight={"bold"} onClick={() => setSearch(searchValue)} />Buscar</button> */}
    </section>
  )
}
