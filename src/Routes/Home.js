import React, {useState, useEffect} from "react";
import { moviesApi } from "../API/api";
import Loader from "../Components/Loader";
import Section from "../Components/Section";
import Poster from "../Components/Poster";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [nowPlaying, setNowPlaying] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [popular, setPopular] = useState([]);


    const fetchContents = async () => {
        try {
            // nowPlaying
            const { data: {results:nowPlaying} } = await moviesApi.nowPlaying();
            console.log("fetch data nowPlaying :",nowPlaying);
            setNowPlaying(nowPlaying);

            // upcoming
            const { data: {results:upcoming} } = await moviesApi.upcoming();
            console.log("fetch data upcoming :",upcoming);
            setUpcoming(upcoming);

            // popular
            const { data: {results:popular} } = await moviesApi.popular();
            console.log("fetch data popular :",popular);
            setPopular(popular);

        } catch {
            setError("fetch data error : nowPlaying");
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {fetchContents();}, []);
 
    return (
        
        <>
            {   
                loading ? <Loader/> :  nowPlaying && nowPlaying.length > 0 &&
                    <Section title="Now Playing">
                        {nowPlaying.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                        ))}
                    </Section>
            }
            {   
                loading ? <Loader/> :  upcoming && upcoming.length > 0 &&
                    <Section title="UpComing">
                        {upcoming.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                        ))}
                    </Section>
            }
            {   
                loading ? <Loader/> :  popular && popular.length > 0 &&
                    <Section title="Popular">
                        {popular.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                        ))}
                    </Section>
            }
        </>
    )
        
        
}