import React from "react"
import {Route, Link, withRouter} from "react-router-dom"
import styled from "styled-components"
import DetailCompanies from "../Routes/DetailCompanies"
import DetailVideos from "../Routes/DetailVideos"

const Main = styled.main`
`;

const SubMenu = styled.div`
    color:white;
    width:90%;
    height:50px;
    display:flex;
    align-items:center;
    border-radius: 20px;
    border-width: 1px;

    background-color: rgba(20,20,20,0.8);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index:5;
`;

const List = styled.ul`
    display:flex;
    justify-content:flex-start;
    gap:10px;
    margin-left:20px
`;

const Item = styled.li`
    width:80px;
    height:50px;
    padding:5px;
    display:flex;
    justify-content:center;
    align-items:center;

    /* @Can not press link without z-index */
    z-index:0;

    &:hover {
        filter: brightness(0.8);
        background-color: #2ecc71;
        transform: scale(0.9);
        color:white;
        font-weight:400;
    }
`;

function MoreTab(props) {
    // get path from props
    console.log("more detail props :", props);
    const { location : {pathname} } = props;
    const { match : {params: {id}}} = props;
    const isMovie = pathname.includes("/movie/");
    console.log("more pathname is :", pathname, isMovie, id);
    return (
        <Main>
            <SubMenu>
                <List>
                    <Item>
                        <Link to={`/movie/${id}`}>Overview</Link>
                    </Item>
                    <Item>
                        <Link to={`/movie/${id}/Companies`}>Companies</Link>
                    </Item>
                    <Item>
                        <Link to={`/movie/${id}/Videos`}>Videos</Link>
                    </Item>
                </List>
            </SubMenu>
            
            <Route path="/movie/:id/Companies" component={DetailCompanies} />
            <Route path="/movie/:id/Videos" component={DetailVideos} />
        </Main>
    );
}

export default withRouter(MoreTab);