import React, { useId } from 'react'

const Input=React.forwardRef(function Input({
    label,
    type="text",
    className="",
    name,
    placeholder,
    ...props
},ref){
    const id = useId();
    return (
        <label className="text-gray-800 block mt-3 text-start">
        {label}
        <input
            type={type} 
            name={name} 
            placeholder={placeholder}
            {...props}
            className={`rounded px-1 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100 ${className}`}   ref={ref} id={id} {...props}/>
        </label>
    )
});
export default Input;