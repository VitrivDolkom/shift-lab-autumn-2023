import classNames from 'classnames/bind'
import s from './style.module.css'

const cx = classNames.bind(s)

interface DistrosTableRowProps {
  row: DistrosTableRow
  headers: DistrosTableRow
  isHeader: boolean
  searchedCells: DistrosTableRow
}

export const DistrosTableRow = ({ row, searchedCells, isHeader, headers }: DistrosTableRowProps) => (
  <div className={s.row}>
    {row.map((cell, index) => (
      <div
        key={index}
        className={cx({
          t6: true,
          cell: true,
          ellipsis: true,
          header: isHeader,
          active: !isHeader && searchedCells.indexOf(cell) > -1
        })}
      >
        <div className={s.cellHeader}>{headers[index]}</div>
        {cell}
      </div>
    ))}
  </div>
)
