const distrosTable: DistrosTable = {
  rows: [
    ['Name', 'Users feedback', 'User experience', 'Company name', 'Origin'],
    [
      'Ubuntu',
      'Ubuntu has been my go-to distro for years. Its rock-solid and user-friendly. I use it for work, and it never disappoints.',
      'Best',
      'Canonical Ltd.',
      'United Kingdom'
    ],
    [
      'Fedora',
      'Fedoras updates are always cutting-edge. I love experimenting with the latest software. It keeps me at the forefront of technology.',
      'Good',
      'Red Hat, Inc.',
      'United States'
    ],
    [
      'Debian',
      'Debian is like a trusty old friend. It might not be flashy, but its dependable. My server runs Debian, and I never have to worry about it.',
      'Good',
      'Debian Project',
      'Worldwide'
    ],
    [
      'Arch Linux',
      'Oh my god, what a hell is going on here...',
      'Terrible',
      'Community-driven',
      'Worldwide'
    ]
  ]
}

export const fetchDistros = (): Promise<DistrosTable> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(distrosTable)
    }, 1000)
  })

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
