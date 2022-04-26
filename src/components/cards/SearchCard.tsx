import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
import { RiHeartsLine, RiHeartsFill } from 'react-icons/ri'
import { Carousel } from 'react-responsive-carousel'
import { SearchTagProps } from '../../assets/data/interfaces'
import { Link } from 'react-router-dom'
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 30,
})

const SearchCard: React.FC<SearchTagProps> = ({ tag }): JSX.Element => {
    const [liked, setLiked] = useState<Boolean>(false)

    const toggleLike = (): void => {
        setLiked(!liked)
    }
    return (
        <Paper
            sx={{
                margin: {
                    lg: '40px auto',
                    md: '30px auto',
                    sm: '20px auto',
                    xs: '10px auto',
                },
                flexGrow: 1,
                background: 'transparent',
                borderRadius: 5,
                boxShadow: {
                    lg: 'none',
                    md: 'none',
                    sm: 'none',
                    xs: '1px 3px 5px 0px #efefef',
                },
                p: {
                    lg: 0,
                    md: 0,
                    sm: 0,
                    xs: 1,
                },
            }}
            elevation={0}
        >
            <Grid
                container
                spacing={{ md: 2, sm: 2, xs: 0 }}
                rowSpacing={{ md: 0, sm: 0, xs: 2 }}
                sx={{
                    justifyContent: {
                        sm: 'flex-start',
                        xs: 'center',
                    },
                }}
            >
                <Grid item>
                    <Box
                        sx={{
                            width: {
                                lg: 330,
                                md: 300,
                                sm: 280,
                                xs: 260,
                            },
                            height: 'auto',
                        }}
                    >
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showArrows={false}
                            showIndicators={false}
                            showThumbs={false}
                            showStatus={false}
                            transitionTime={1000}
                            interval={10000}
                            swipeable={false}
                        >
                            {tag.img.map((item, index) => (
                                <Img alt="search" src={item} key={index} />
                            ))}
                        </Carousel>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm
                    container
                    spacing={2}
                    sx={{
                        flexDirection: {
                            md: 'row',
                            sm: 'column',
                            xs: 'column',
                        },
                    }}
                >
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Link to="/product">
                                <h3 className="font-extrabold text-searchPlaceholder text-lg xs:text-sm">{`${tag.name} in ${tag.location}`}</h3>
                            </Link>
                            <p className="font-extrabold text-black text-lg  xs:text-sm my-2">
                                {tag.description}
                            </p>
                            <p className="font-extrabold text-black text-lg  xs:text-sm">
                                {tag.attributes}
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            sx={{
                                height: '100%',
                                flexDirection: {
                                    lg: 'column',
                                    md: 'column',
                                    sm: 'row-reverse',
                                    xs: 'row-reverse',
                                },
                                alignItems: {
                                    md: 'end',
                                    sm: 'center',
                                    xs: 'center',
                                },
                            }}
                        >
                            <span
                                className="text-4xl xs:text-2xl cursor-pointer flex justify-end"
                                onClick={toggleLike}
                            >
                                {liked ? (
                                    <RiHeartsFill className="text-red-600" />
                                ) : (
                                    <RiHeartsLine />
                                )}
                            </span>
                            <span className="font-extrabold text-black text-lg  xs:text-sm">
                                {tag.price}
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SearchCard
