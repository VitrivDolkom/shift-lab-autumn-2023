import classNames from 'classnames/bind'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Select } from '../'
import s from './style.module.css'

const cx = classNames.bind(s)

interface SearchFieldProps {
  onSubmit: (search: SearchForm) => void
  headers: DistrosTableHeader
  searchInfo: string
  searchLoading: boolean
}

type SearchForm = TableSearchDto

export const DistrosSearch = ({ onSubmit, headers, searchInfo, searchLoading }: SearchFieldProps) => {
  const [currentOption, setCurrentOption] = React.useState(headers[0])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchForm>()
  const onSearchSubmit: SubmitHandler<SearchForm> = (values) => {
    values.header = currentOption
    onSubmit(values)
  }

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSearchSubmit)}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            {...register('search', { required: true })}
            className="input t5"
            placeholder="Введите текст..."
          />
          {!searchLoading && (
            <p className={cx({ searchInfo: true, t4: true, error: !!errors.search })}>
              {!!errors.search ? 'Заполните поле' : searchInfo}
            </p>
          )}
        </div>
        <Select
          options={headers}
          currentOption={currentOption}
          onOptionChange={(newOption) => setCurrentOption(newOption)}
        />
        <button type="submit" className="button solid t5">
          {searchLoading && <span className="loader"></span>}
          {!searchLoading && 'Поиск'}
        </button>
      </form>
    </div>
  )
}
