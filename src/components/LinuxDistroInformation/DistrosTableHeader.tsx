interface TableHeaderProps {
  header: DistrosTableHeader
}

export const DistrosTableHeader = ({ header }: TableHeaderProps) => (
  <div className="header">
    {header.map((head, index) => (
      <div key={index} className="head">
        {head}
      </div>
    ))}
  </div>
)
