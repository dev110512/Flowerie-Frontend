import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    background: 'dark' | 'light'
    color: 'dark' | 'light'
    space?: boolean | null
}

const ContainedButton: React.FC<ButtonProps> = ({
    children,
    background,
    color,
    space,
}): JSX.Element => {
    return (
        <button
            className={`${background === 'dark' ? 'bg-dark' : 'bg-white'} 
      px-4  py-4 md:py-3  
      ${color === 'dark' ? 'text-black' : 'text-white'}  
        ${space ? 'mt-8 md:mt-4 sm:mt-2' : 'mt-0'}
        font-regular text-xl md:text-md sm:text-sm xs:text-xs rounded-20 sm:rounded-[12px] xs:rounded-xl w-max  hover:scale-105 transition-transform duration-300 drop-shadow-lg
        `}
        >
            {children}
        </button>
    )
}

export default ContainedButton
