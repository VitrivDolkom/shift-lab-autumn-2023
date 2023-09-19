import classNames from 'classnames/bind'

import { SearchForm } from '../SearchField/SearchField'

import s from './style.module.css'

const cx = classNames.bind(s)

interface DistrosTableRowProps {
  row: DistrosTableRow
  isHeader: boolean
  searchInfo: SearchForm
  headers: DistrosTableHeader
}

export const DistrosTableRow = ({ row, isHeader, searchInfo, headers }: DistrosTableRowProps) => {
  console.log(headers)
  return (
    <div className={s.row}>
      {row.map((cell, index) => (
        <div
          key={index}
          className={cx({
            cell: true,
            header: isHeader,
            active:
              !!searchInfo.search &&
              !isHeader &&
              headers[index] === searchInfo.currentHeader &&
              cell.toLowerCase().indexOf(searchInfo.search.toLowerCase()) > -1
          })}
        >
          {cell}
        </div>
      ))}
    </div>
  )
}
