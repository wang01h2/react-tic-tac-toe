/**
 * Button组件
 * type: 按钮的类型
 * onClick: click事件
 * children: 子内容，如果是非文本，则会undefined，未知原因
 * className: class name
 */

export function Button({type, onClick, children, className}) {
  const handleClick = () => {
    if (!onClick) return
    onClick()
  }
  return (
    <button
      className={type === 'danger' ? `bg-red-100 p-2 px-4 rounded-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:bg-red-100 focus:ring-opacity-50 ${className}` : type === 'warning' ? `bg-orange-100 p-2 px-4 rounded-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:bg-orange-100 focus:ring-opacity-50 ${className}` : `text-gray-600 p-2 px-4 rounded-sm hover:text-gray-800 focus:outline-none focus:ring-2 focus:bg-gray-100 focus:ring-opacity-50 ${className}`}
      onClick={handleClick}>{children}</button>
  )
}

export default Button
