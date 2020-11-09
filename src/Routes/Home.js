import React, {useState, useEffect} from "react";
import { moviesApi } from "../API/api";
import Loader from "../Components/Loader";
import Section from "../Components/Section";
import Poster from "../Components/Poster";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [nowPlaying, setNowPlaying] = useState([]);


    const fetchNowPlaying = async () => {
        try {
            const { data: {results} } = await moviesApi.nowPlaying();
            console.log("fetch data nowPlaying :",results);
            setNowPlaying(results);
        } catch {
            setError("fetch data error : nowPlaying");
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {fetchNowPlaying();}, []);
 
    return (
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
    )
        
        
}