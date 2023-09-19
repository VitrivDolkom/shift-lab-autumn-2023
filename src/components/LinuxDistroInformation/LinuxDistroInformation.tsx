import { useEffect, useState } from 'react'

import './style.css'

import { fetchDistros } from '../../api'
import { DistrosTableRow } from './DistrosTableRow'

export const LinuxDistroInformation = () => {
  const [distrosTable, setDistrosTable] = useState<DistrosTable | null>(null)

  useEffect(() => {
    fetchDistros().then((table) => setDistrosTable(table))
  }, [])

  if (!distrosTable) return null

  return (
    <div className="table">
      {/* <DistrosTableHeader header={distrosTable.header} /> */}
      {distrosTable.rows.map((row, index) => (
        <DistrosTableRow key={index} row={row} isHeader={index === 0} />
      ))}
    </div>
  )
}
