import React from 'react'
import { fetchDistros, postSearch } from 'src/shared/api'

export const useLinuxPageState = () => {
  const [searchLoading, setSearchLoading] = React.useState(false)
  const [tableLoading, setTableLoading] = React.useState(false)
  const [distrosTable, setDistrosTable] = React.useState<DistrosTable | null>(null)
  const [searchedCells, setSearchedCells] = React.useState<DistrosTableRow>([])
  const [searchInfo, setSearchInfo] = React.useState('')

  React.useEffect(() => {
    setTableLoading(true)
    fetchDistros()
      .then((table) => setDistrosTable(table))
      .finally(() => setTableLoading(false))
  }, [])

  const updateSearchInfo = (cellsAmount: number) => {
    if (!cellsAmount) setSearchInfo('Ничего не найдено')
    else setSearchInfo(`${cellsAmount} совпадений в таблице`)
  }

  const onSearchSubmit = (newSearch: TableSearchDto) => {
    setSearchLoading(true)
    postSearch(newSearch)
      .then((cells) => {
        setSearchedCells(cells)
        updateSearchInfo(cells.length)
      })
      .finally(() => setSearchLoading(false))
  }

  return {
    distrosTable,
    searchedCells,
    searchInfo,
    searchLoading,
    tableLoading,
    onSearchSubmit
  }
}
