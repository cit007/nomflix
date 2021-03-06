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

  @media screen and (max-width: 762px) {
    width:100vw;
    position: absolute;
    left:0;
  }
`;

const ItemList = styled.ul`
  display:flex;
  flex-flow:column;
`;

const Item = styled.li`
  margin-bottom: 10px;
  font-size:25px;
  font-weight:100;
`;

const Video = styled.div`
  display:flex;
  flex-flow:column;
  z-index:0;
`;

const Div = styled.div`
  padding:10px;
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
    // const opts = {
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //   },
    // };

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
                  <Video>
                  {  (detail && detail.length > 0) ?
                    detail.map ( video => (
                      <Item>
                        <Div>
                          ■ {video.site} : {video.name}
                        </Div>
                        <iframe allowfullscreen="" frameborder="0" height="315" src={`https://www.youtube.com/embed/${video.key}`} width="560"></iframe>
                        {/* <YouTube videoId={video.key} opts={opts} /> */}
                      </Item>) 
                    )
                    :
                    <Item>"No Result Found..."</Item>
                  }
                  </Video>
                </ItemList>
            </Container>
          )
    );   
}