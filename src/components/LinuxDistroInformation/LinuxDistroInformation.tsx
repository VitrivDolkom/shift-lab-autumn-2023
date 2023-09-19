import { useEffect, useState } from 'react'

import { DistrosTableHeader } from './DistrosTableHeader'
import './style.css'

import { fetchDistros } from '../../api'

export const LinuxDistroInformation = () => {
  const [distrosTable, setDistrosTable] = useState<DistrosTable | null>(null)

  useEffect(() => {
    fetchDistros().then((table) => setDistrosTable(table))
  }, [])

  if (!distrosTable) return null

  return (
    <div className="">
      <DistrosTableHeader header={distrosTable.header} />
    </div>
  )
}
