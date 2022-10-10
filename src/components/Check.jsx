

export function Check({type, onClick, children, className}) {
  return (
    <div className={`${className}-${type}`} onClick={onClick} />
  )
}
