import { distrosTable } from './table'

export const postSearch = (dto: TableSearchDto): Promise<DistrosTableRow> => {
  const rowIndex = distrosTable.rows[0].indexOf(dto.header)
  const arr: DistrosTableRow = []
  let errorMessage = ''

  if (rowIndex === -1) errorMessage = 'Header not valid'

  for (let i = 1; i < distrosTable.rows.length; i++) {
    const row = distrosTable.rows[i]

    if (row[rowIndex].toLowerCase().indexOf(dto.search.toLowerCase()) > -1) {
      arr.push(row[rowIndex])
    }
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!errorMessage) reject(errorMessage)
      resolve(arr)
    }, 1000)
  })
}
