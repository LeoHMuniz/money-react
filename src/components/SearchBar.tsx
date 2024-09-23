import { MagnifyingGlass } from 'phosphor-react'
import '../styles/SearchBar.scss'
import React from 'react'

export default function SearchBar() {
  return (
    <section className="searchBarContainer">
      <input type="text"  className="searchBar input" placeholder="Busque uma transação"/>
      <button className="search"><MagnifyingGlass size={20} weight={"bold"}/> Buscar</button>
    </section>
  )
}
