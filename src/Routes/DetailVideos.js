import React, {useState, useEffect} from "react";
import { moviesApi, tvApi } from "../API/api";
import styled from "styled-components";
import Loader from "../Components/Loader";
import YouTube from 'react-youtube';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 30px;
  padding: 20px;
`;

const ItemList = styled.ul`

`;

const Item = styled.li`
  font-size:30px;
  font-weight:100;
  margin-bottom: 10px;

  display:flex;
  flex-flow:column;
`;


const NotFoundImage = "../assets/noPosterSmall.png";

export default function DetailVideos(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [detail, setDetail] = useState(null);
    
    // get path from props
    console.log("detail videos props :", props);
    const { location : {pathname} } = props;
    const { match : {params: {id}}} = props;
    const isMovie = pathname.includes("/movie/");

    // YOUTUBE OPTION
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    console.log("detail videos pathname is :", pathname, isMovie, id);

    const fetchContents = async () => {
        try {
            if(isMovie) {
              const { data: 
                {videos: 
                  {results:detail}
                } 
              } = await moviesApi.movieDetail(id);
              console.log("fetch data movie detail:",detail);
              setDetail(detail);
            } else {
              const { data: 
                {videos: 
                  {results:detail}
                } 
              } = await tvApi.tvDetail(id);
              console.log("fetch data tv detail:",detail);
              setDetail(detail);
            }
            
        } catch {
            setError("fetch data error : nowPlaying");
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {fetchContents();}, []);
 
    return (
        loading ? (
            <>
              <title>Loading | Nomflix</title>
              <Loader />
            </>
          ) : (
            <Container>
                <ItemList>
                  {  detail && detail.length > 0 &&
                    detail.map ( video => (
                      <Item>
                        {video.name} : {video.site}
                        <YouTube videoId={video.key} opts={opts} />
                      </Item>) 
                    )
                  }
                </ItemList>
            </Container>
          )
    );   
}