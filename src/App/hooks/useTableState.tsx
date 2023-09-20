import { fetchDistros } from '@/api'
import React from 'react'

export const useTableState = () => {
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

  return {
    distrosTable,
    searchedCells,
    setSearchedCells,
    searchInfo,
    updateSearchInfo,
    searchLoading,
    setSearchLoading,
    tableLoading
  }
}
