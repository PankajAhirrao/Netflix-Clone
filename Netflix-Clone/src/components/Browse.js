import React, { useEffect } from 'react'
import Header from './Header';
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
    const user = useSelector(store => store.app.user);
    const toggle = useSelector(store => store.movie.toggle);
    const navigate = useNavigate();

    // my custom hooks
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, []);
    return (
        <div >
            <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>

                    )
                }

            </div>
        </div>
    )
}

export default Browse