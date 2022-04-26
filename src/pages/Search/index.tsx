import React, { useState } from 'react'
import { Stack, Pagination, PaginationItem } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import SearchNavbar from '../../components/navbars/SearchNavbar'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'
import FilterButton from '../../components/buttons/FilterButton'
import FilterTag from '../../components/chips/FilterTag'
import SearchCard from '../../components/cards/SearchCard'
import { searchData } from '../../assets/data/static/searchData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FilterDropDown from '../../components/popovers/FilterDropDown'
import { FilterTagType } from '../../assets/data/types'
const Search: React.FC = (): JSX.Element => {
    const matchesMobile = useMediaQuery('(max-width: 500px)')
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const [filterTags, setFilterTags] = useState<Array<FilterTagType>>([
        {
            id: 0,
            label: 'Parking',
            value: 'parking',
        },
        {
            id: 1,
            label: 'Disability access',
            value: 'disability_access',
        },
        {
            id: 2,
            label: 'Pets allowed',
            value: 'pets_allowed',
        },
    ])

    const handleDropDownOpen = (
        event: React.MouseEvent<HTMLButtonElement | null>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropDownClose = () => {
        setAnchorEl(null)
    }

    const handleFilterSelect = (tag: FilterTagType) => {
        let newFilterTags: Array<FilterTagType> = [...filterTags]
        if (newFilterTags.some((t: FilterTagType) => t.id === tag.id)) {
            newFilterTags = newFilterTags.filter(
                (t: FilterTagType) => t.id !== tag.id
            )
        } else {
            newFilterTags.push(tag)
        }
        setFilterTags(newFilterTags)
    }
    const dropDownOpen: boolean = Boolean(anchorEl)
    const id: string | undefined = dropDownOpen ? 'nav-dropdown' : undefined

    return (
        <>
            <SearchNavbar />
            <LoginModal />
            <SignupModal />
            <div className="bg-search bg-[length:100%_70vh]  md:bg-contain sm:bg-contain xs:bg-contain bg-no-repeat bg-top w-full min-h-[600px] mt-36 md:mt-32 sm:mt-16 xs:mt-12 pt-52 md:pt-44 sm:pt-28 xs:pt-8 sm:px-8 xs:px-4">
                <div className="w-4/5 sm:w-full h-full bg-white rounded-2xl mx-auto my-16 py-8 px-10 xs:px-4 overflow-auto">
                    <div className="flex w-full">
                        <div id="container">
                            <FilterButton
                                id="tag"
                                onClick={handleDropDownOpen}
                                aria-describedby={id}
                            >
                                Add Filters +
                            </FilterButton>
                            <FilterDropDown
                                id={id}
                                open={dropDownOpen}
                                anchorEl={anchorEl}
                                handleClose={handleDropDownClose}
                                tagList={filterTags}
                                handleChange={handleFilterSelect}
                            />
                        </div>
                        <div className="ml-10 sm:ml-8 xs:ml-4 flex flex-wrap xs:flex-nowrap xs:overflow-auto no-scroll">
                            {filterTags.map((tag, index) => (
                                <FilterTag
                                    key={index}
                                    tag={tag}
                                    handleDelete={handleFilterSelect}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="font-regular text-black text-2xl sm:text-xl xs:text-sm mt-2 mb-4">
                        245+ results - 22nd Aug, 2022 for 400 + guests
                    </div>
                    <h1 className="font-extrabold text-black text-5xl sm:text-4xl xs:text-2xl">
                        Venues in London
                    </h1>
                    <div>
                        {searchData.map((search, index) => (
                            <SearchCard key={index} tag={search} />
                        ))}
                    </div>
                    <div>
                        <input />
                        <Stack spacing={2}>
                            <Pagination
                                size={matchesMobile ? 'small' : 'large'}
                                color="neutral"
                                sx={{
                                    '& .MuiPagination-ul': {
                                        justifyContent: 'center',
                                    },
                                }}
                                count={10}
                                renderItem={(item) => (
                                    <PaginationItem
                                        components={{
                                            previous: ArrowBackIcon,
                                            next: ArrowForwardIcon,
                                        }}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </div>
                </div>
                <div id="map" className="w-full h-96 bg-slate/60"></div>
            </div>
        </>
    )
}

export default Search
