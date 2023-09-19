import React from 'react'

import { fetchDistros } from '../../api'

export const useTableState = () => {
  const [distrosTable, setDistrosTable] = React.useState<DistrosTable | null>(null)
  const [searchedCells, setSearchedCells] = React.useState<DistrosTableRow>([])
  const [searchInfo, setSearchInfo] = React.useState('')

  React.useEffect(() => {
    fetchDistros().then((table) => setDistrosTable(table))
  }, [])

  const updateSearchInfo = (cellsAmount: number) => {
    if (!cellsAmount) setSearchInfo('No cells found')
    else setSearchInfo(`${cellsAmount} cells found`)
  }

  return { distrosTable, searchedCells, setSearchedCells, searchInfo, updateSearchInfo }
}
