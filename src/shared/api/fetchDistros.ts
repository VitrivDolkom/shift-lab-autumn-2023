import { distrosTable } from './table'

export const fetchDistros = (): Promise<DistrosTable> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(distrosTable)
    }, 1000)
  })
