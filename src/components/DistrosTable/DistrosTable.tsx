import { DistrosTableRow } from './DistrosTableRow'

import s from './style.module.css'

interface DistrosTableProps {
  searchedCells: DistrosTableRow
  table: DistrosTable
}

export const DistrosTable = ({ searchedCells, table }: DistrosTableProps) => (
  <div className={s.table}>
    {/* <DistrosTableHeader header={distrosTable.header} /> */}
    {table.rows.map((row, index) => (
      <DistrosTableRow
        key={index}
        row={row}
        isHeader={index === 0}
        searchedCells={searchedCells}
        headers={table.rows[0]}
      />
    ))}
  </div>
)
