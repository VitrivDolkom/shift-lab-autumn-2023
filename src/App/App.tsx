import React, { useState } from 'react'

import { fetchDistros } from '../api'
import { DistrosTable } from '../components/DistrosTable'
import { SearchField, SearchForm } from '../components/SearchField/SearchField'

import './style.css'

const App = () => {
  const [distrosTable, setDistrosTable] = React.useState<DistrosTable | null>(null)
  const [search, setSearch] = useState<SearchForm>({ search: '', currentHeader: '' })

  React.useEffect(() => {
    fetchDistros().then((table) => setDistrosTable(table))
  }, [])

  const onSearchSubmit = (newSearch: SearchForm) => {
    setSearch(newSearch)
  }

  if (!distrosTable) return null

  return (
    <div className="app">
      <div className="box">
        <SearchField onSubmit={onSearchSubmit} headers={distrosTable.rows[0]} />
        <DistrosTable searchInfo={search} table={distrosTable} />
      </div>
    </div>
  )
}

export default App
