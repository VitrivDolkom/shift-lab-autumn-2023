import { postSearch } from '@/api'
import { DistrosTable } from '@/components'
import { DistrosSearch } from '@/components/DistrosSearch/DistrosSearch'
import { useTableState } from './hooks/useTableState'
import './styles/style.css'

const App = () => {
  const {
    distrosTable,
    searchInfo,
    searchedCells,
    updateSearchInfo,
    setSearchedCells,
    searchLoading,
    setSearchLoading,
    tableLoading
  } = useTableState()

  const onSearchSubmit = (newSearch: TableSearchDto) => {
    setSearchLoading(true)
    postSearch(newSearch)
      .then((cells) => {
        setSearchedCells(cells)
        updateSearchInfo(cells.length)
      })
      .finally(() => setSearchLoading(false))
  }

  if (!distrosTable || tableLoading) {
    return <div>Загрузка ...</div>
  }

  return (
    <div className="app">
      <div className="box">
        <DistrosSearch
          searchInfo={searchInfo}
          onSubmit={onSearchSubmit}
          headers={distrosTable.rows[0]}
          searchLoading={searchLoading}
        />
        <DistrosTable table={distrosTable} searchedCells={searchedCells} />
      </div>
    </div>
  )
}

export default App
