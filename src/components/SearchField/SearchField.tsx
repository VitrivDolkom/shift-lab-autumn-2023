interface SearchFieldProps {
  onChange: (value: string) => void
  searchValue: string
  onSubmit: () => void
}

export const SearchField = ({ onChange, onSubmit, searchValue }: SearchFieldProps) => (
  <div className="searchInfo">
    <input type="text" value={searchValue} onChange={(e) => onChange(e.target.value)} />
    <button onClick={onSubmit}>Search</button>
  </div>
)
