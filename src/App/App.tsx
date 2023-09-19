import React, { useState } from 'react'
import { DistrosTable } from '../components/DistrosTable'
import { SearchField } from '../components/SearchField/SearchField'
import './style.css'
import { fetchDistros } from '../api'

const App = () => {
  const [distrosTable, setDistrosTable] = React.useState<DistrosTable | null>(null)
  const [search, setSearch] = useState('')

  React.useEffect(() => {
    fetchDistros().then((table) => setDistrosTable(table))
  }, [])

  React.useEffect(() => {}, [search])

  const onSearchChange = (value: string) => {
    setSearch(value)
  }

  const onSearchSubmit = () => {
    console.log(search)
  }

  if (!distrosTable) return null

  return (
    <div className="app">
      <div className="box">
        <SearchField searchValue={search} onChange={onSearchChange} onSubmit={onSearchSubmit} />
        <DistrosTable table={distrosTable} />
      </div>
    </div>
  )
}

export default App
