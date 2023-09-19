import classNames from 'classnames/bind'

import s from './style.module.css'

const cx = classNames.bind(s)

interface DistrosTableRowProps {
  row: DistrosTableRow
  isHeader: boolean
}
export const DistrosTableRow = ({ row, isHeader }: DistrosTableRowProps) => (
  <div className={s.row}>
    {row.map((cell, index) => (
      <div key={index} className={cx({ cell: true, header: isHeader })}>
        {cell}
      </div>
    ))}
  </div>
)
