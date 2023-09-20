import { postSearch } from '@/api'
import { DistrosTable } from '@/components'
import { DistrosSearch } from '@/components/DistrosSearch/DistrosSearch'
import { Typography } from '@/shared/uikit'
import { useLinuxPageState } from './useLinuxPageState'
import s from './style.module.css'

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
    return (
      <div className={s.wrapper}>
        <span className="loader primary bg"></span>
      </div>
    )
  }

  return (
    <div className={s.wrapper}>
      <Typography tag="h1" className="h2">
        &#128039; Linux Table
      </Typography>
      <DistrosSearch
        searchInfo={searchInfo}
        onSubmit={onSearchSubmit}
        headers={distrosTable.rows[0]}
        searchLoading={searchLoading}
      />
      <DistrosTable table={distrosTable} searchedCells={searchedCells} />
    </div>
  )
}
