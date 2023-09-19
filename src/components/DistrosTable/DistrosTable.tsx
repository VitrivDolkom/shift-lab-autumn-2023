import s from './style.module.css'
import { DistrosTableRow } from './DistrosTableRow'

interface DistrosTableProps {
  table: DistrosTable
}

export const DistrosTable = ({ table }: DistrosTableProps) => (
  <div className={s.table}>
    {/* <DistrosTableHeader header={distrosTable.header} /> */}
    {table.rows.map((row, index) => (
      <DistrosTableRow key={index} row={row} isHeader={index === 0} />
    ))}
  </div>
)
