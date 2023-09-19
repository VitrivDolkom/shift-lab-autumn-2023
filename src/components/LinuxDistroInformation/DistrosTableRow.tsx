import classNames from 'classnames'

interface DistrosTableRowProps {
  row: DistrosTableRow
  isHeader: boolean
}
export const DistrosTableRow = ({ row, isHeader }: DistrosTableRowProps) => (
  <div className="row">
    {row.map((cell, index) => (
      <div key={index} className={classNames({ cell: true, header: isHeader })}>
        {cell}
      </div>
    ))}
  </div>
)
