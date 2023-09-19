import { postSearch } from '../api'
import { DistrosTable } from '../components/DistrosTable'
import { SearchField, SearchForm } from '../components/SearchField/SearchField'
import { useTableState } from './useTableState'

import './style.css'

const App = () => {
  const { distrosTable, searchInfo, searchedCells, updateSearchInfo, setSearchedCells } = useTableState()

  const onSearchSubmit = (newSearch: SearchForm) => {
    postSearch(newSearch).then((cells) => {
      setSearchedCells(cells)
      updateSearchInfo(cells.length)
    })
  }

  if (!distrosTable) return null

  return (
    <div className="app">
      <div className="box">
        <SearchField searchInfo={searchInfo} onSubmit={onSearchSubmit} headers={distrosTable.rows[0]} />
        <DistrosTable table={distrosTable} searchedCells={searchedCells} />
      </div>
    </div>
  )
}

export default App
