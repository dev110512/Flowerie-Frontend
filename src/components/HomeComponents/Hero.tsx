import React from 'react'
import SearchInput from '../inputs/SearchInput'
import ContainedButton from '../buttons/ContainedButton'
import { Link } from 'react-router-dom'
const Hero = (): JSX.Element => {
    return (
        <div
            className="bg-hero max-h-hero-max bg-no-repeat bg-cover bg-bottom pb-16 md:pb-12 sm:pb-8"
            id="#"
        >
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-center my-20 md:my-18 sm:my-16 xs:px-4">
                    <div className="w-2/5 xs:w-full sm:w-4/5 md:w-3/5 ">
                        <SearchInput />
                    </div>
                </div>
                <div className="flex flex-col mt-0 ml-28 md:ml-20 sm:ml-16 xs:ml-4">
                    <h1 className="text-white text-5xl xs:text-3xl font-semibold max-w-header xs:max-w-mobile leading-11">
                        Not sure where to go? Perfect.
                    </h1>
                    <Link to="search">
                        <ContainedButton
                            color="dark"
                            background="light"
                            space={true}
                        >
                            Inspire Me!
                        </ContainedButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
