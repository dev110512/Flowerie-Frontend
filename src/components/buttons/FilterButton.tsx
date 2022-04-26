import React from 'react'

interface FilterButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const FilterButton: React.FC<FilterButtonProps> = ({
    children,
    onClick,
}): JSX.Element => {
    return (
        <button
            className="border-[0.5px] border-filterBorder rounded-full px-[18px] py-[10px] min-w-max bg-filterBackground font-semibold text-filterBorder text-xl xs:text-sm hover:bg-filterBackgroundHover transition-colors duration-300"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default FilterButton
