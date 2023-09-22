import classNames from 'classnames/bind'
import { Select } from '~/features'
import { Button, Typography } from '~/shared/uikit'
import { useDistrosSearchState } from './useDistrosSearchState'
import s from './style.module.css'

const cx = classNames.bind(s)

interface SearchFieldProps {
  onSubmit: (searchDto: TableSearchDto) => void
  headers: DistrosTableHeaders
  searchInfo: string
  searchLoading: boolean
}

export const DistrosSearch = ({ onSubmit, headers, searchInfo, searchLoading }: SearchFieldProps) => {
  const { header, search, setSearch, setHeader } = useDistrosSearchState({
    search: '',
    header: headers[0]
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ search: search || '', header: header || '' })
  }

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input t5"
            placeholder="Введите текст..."
          />
          {!searchLoading && (
            <Typography tag="p" className={cx({ searchInfo: true, t4: true, error: !search.length })}>
              {searchInfo}
            </Typography>
          )}
        </div>
        <Select
          options={headers}
          currentOption={header}
          onOptionChange={(newOption) => setHeader(newOption)}
        />
        <Button
          styleType="solid"
          type="submit"
          isLoading={searchLoading}
          loader={<span className="loader"></span>}
          className="button t5"
        >
          Поиск
        </Button>
      </form>
    </div>
  )
}
