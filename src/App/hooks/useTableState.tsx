import { fetchDistros } from '@/api'
import React from 'react'

export const useTableState = () => {
  const [distrosTable, setDistrosTable] = React.useState<DistrosTable | null>(null)
  const [searchedCells, setSearchedCells] = React.useState<DistrosTableRow>([])
  const [searchInfo, setSearchInfo] = React.useState('')

  React.useEffect(() => {
    fetchDistros().then((table) => setDistrosTable(table))
  }, [])

  const updateSearchInfo = (cellsAmount: number) => {
    if (!cellsAmount) setSearchInfo('Ничего не найдено')
    else setSearchInfo(`${cellsAmount} совпадений в таблице`)
  }

  return { distrosTable, searchedCells, setSearchedCells, searchInfo, updateSearchInfo }
}
