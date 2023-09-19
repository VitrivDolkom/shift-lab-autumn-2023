import { postSearch } from '@/api'
import { DistrosSearch, SearchForm } from '@/components/DistrosSearch/DistrosSearch'
import { DistrosTable } from '@/components/DistrosTable'
import { useTableState } from './hooks/useTableState'
import './styles/style.css'

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
        <DistrosSearch
          searchInfo={searchInfo}
          onSubmit={onSearchSubmit}
          headers={distrosTable.rows[0]}
        />
        <DistrosTable table={distrosTable} searchedCells={searchedCells} />
      </div>
    </div>
  )
}

export default App
