import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { FilterTagType } from '../../assets/data/types'
interface FilterTagProps {
    tag: FilterTagType
    handleDelete(tag: FilterTagType): void
}

const FilterTag: React.FC<FilterTagProps> = ({
    tag,
    handleDelete,
}): JSX.Element => {
    return (
        <button className="border-[0.5px] border-filterBorder rounded-full px-[28px] py-[10px] sm:px-[20px] xs:px-[16px] min-w-max bg-filterBackground font-semibold text-filterBorder text-xl xs:text-sm hover:bg-filterBackgroundHover transition-colors duration-300 flex items-center mx-2 mb-2">
            {tag.label}
            <span className="ml-4 xs:ml-1">
                <CloseIcon
                    sx={{
                        fontSize: {
                            sm: 24,
                            xs: 16,
                        },
                        transition:
                            'transform 0.3s ease-in-out, opacity 0.5s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                    onClick={() => handleDelete(tag)}
                />
            </span>
        </button>
    )
}

export default FilterTag
