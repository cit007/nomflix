import React, {useState, useEffect} from "react";
import { tvApi } from "../API/api";
import Loader from "../Components/Loader";
import Section from "../Components/Section";
import Poster from "../Components/Poster";

export default function TV() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [topRated, setTopRated] = useState([]);

    const fetchContents = async () => {
        try {
            const { data: {results} } = await tvApi.topRated();
            console.log("fetch data topRated :",results);
            setTopRated(results);
        } catch {
            setError("fetch data error : topRated");
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {fetchContents();}, []);
 
    return (
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
    ) 
}