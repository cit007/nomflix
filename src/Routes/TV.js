import React, {useState, useEffect} from "react";
import { tvApi } from "../API/api";
import Loader from "../Components/Loader";
import Section from "../Components/Section";
import Poster from "../Components/Poster";

export default function TV() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);
    const [airingToday, setAiringToday] = useState([]);

    const fetchContents = async () => {
        try {
            // topRated
            const { data: {results:topRated} } = await tvApi.topRated();
            console.log("fetch data topRated :",topRated);
            setTopRated(topRated);

            // popular
            const { data: {results:popular} } = await tvApi.popular();
            console.log("fetch data popular :",popular);
            setPopular(popular);

            // popular
            const { data: {results:airingToday} } = await tvApi.airingToday();
            console.log("fetch data airingToday :",airingToday);
            setAiringToday(airingToday);
        } catch {
            setError("fetch data error : tv data");
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {fetchContents();}, []);
 
    return (
        <>
            {
                loading ? <Loader/> :  topRated && topRated.length > 0 &&
                <Section title="Top Rated Shows">
                    {topRated.map(show => (
                      <Poster
                        key={show.id}
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.original_name}
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0, 4)}
                      />
                    ))}
                </Section>
            }
            {
                loading ? <Loader/> :  popular && popular.length > 0 &&
                <Section title="Popular">
                    {popular.map(show => (
                      <Poster
                        key={show.id}
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.original_name}
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0, 4)}
                      />
                    ))}
                </Section>
            }
            {
                loading ? <Loader/> :  airingToday && airingToday.length > 0 &&
                <Section title="AiringToday">
                    {airingToday.map(show => (
                      <Poster
                        key={show.id}
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.original_name}
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0, 4)}
                      />
                    ))}
                </Section>
            }
        </>    
    ) 
}