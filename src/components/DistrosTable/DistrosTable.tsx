import { SearchForm } from '../SearchField/SearchField'
import { DistrosTableRow } from './DistrosTableRow'

import s from './style.module.css'

interface DistrosTableProps {
  searchInfo: SearchForm
  table: DistrosTable
}

export const DistrosTable = ({ searchInfo, table }: DistrosTableProps) => (
  <div className={s.table}>
    {/* <DistrosTableHeader header={distrosTable.header} /> */}
    {table.rows.map((row, index) => (
      <DistrosTableRow
        key={index}
        row={row}
        isHeader={index === 0}
        searchInfo={searchInfo}
        headers={table.rows[0]}
      />
    ))}
  </div>
)
