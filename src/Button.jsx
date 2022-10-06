// 文档建议直接解构获取props，而不是获取props对象
export function Button({type,onClick,children,className}) {
    const handleClick = () => {
        if(!onClick) return
        onClick()
    }
     return (
         <button
             className={`bg-gray-100 p-2 px-4 rounded-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:bg-gray-100 focus:ring-opacity-50 ${className}`}
             onClick={handleClick}>{children}</button>
     )
}

export default Button
