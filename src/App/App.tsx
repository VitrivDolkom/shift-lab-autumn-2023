import React, { useState } from 'react'

import { fetchDistros, postSearch } from '../api'
import { DistrosTable } from '../components/DistrosTable'
import { SearchField, SearchForm } from '../components/SearchField/SearchField'

import './style.css'

const App = () => {
  const [distrosTable, setDistrosTable] = React.useState<DistrosTable | null>(null)
  const [searchedCells, setSearchedCells] = useState<DistrosTableRow>([])

  React.useEffect(() => {
    fetchDistros().then((table) => setDistrosTable(table))
  }, [])

  const onSearchSubmit = (newSearch: SearchForm) => {
    postSearch(newSearch).then((cells) => setSearchedCells(cells))
  }

  if (!distrosTable) return null

  return (
    <div className="app">
      <div className="box">
        <SearchField onSubmit={onSearchSubmit} headers={distrosTable.rows[0]} />
        <DistrosTable table={distrosTable} searchedCells={searchedCells} />
      </div>
    </div>
  )
}

export default App
