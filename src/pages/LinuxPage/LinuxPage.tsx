import { postSearch } from '@/api'
import { DistrosTable } from '@/components'
import { DistrosSearch } from '@/components/DistrosSearch/DistrosSearch'
import { useLinuxPageState } from './useLinuxPageState'

export const LinuxPage = () => {
  const {
    distrosTable,
    searchInfo,
    searchedCells,
    updateSearchInfo,
    setSearchedCells,
    searchLoading,
    setSearchLoading,
    tableLoading
  } = useLinuxPageState()

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
    <>
      <DistrosSearch
        searchInfo={searchInfo}
        onSubmit={onSearchSubmit}
        headers={distrosTable.rows[0]}
        searchLoading={searchLoading}
      />
      <DistrosTable table={distrosTable} searchedCells={searchedCells} />
    </>
  )
}
