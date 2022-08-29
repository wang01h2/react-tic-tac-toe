export function Button(props) {
    const handleClick = () => {
        if(!props.onClick) return
        props.onClick()
    }
     return (
         <button
             className="bg-gray-100 p-2 px-4 rounded-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:bg-gray-100 focus:ring-opacity-50"
             onClick={handleClick}>{props.children}</button>
     )
}

export default Button
