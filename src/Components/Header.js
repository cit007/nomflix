import React from "react"
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components"

const Header = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;

    background-color: rgba(20,20,20,0.8);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index:5;
`;

const List = styled.ul`
    display:flex;
    margin-left:20px
`;
const Item = styled.li`
    width:80px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom: 5px solid ${props => (props.current? "#3498db": "transparent")};
    transition: border-bottom .5s ease-in-outset;
`;

function HeaderC(props) {
    const{location:{pathname}} = props;
    
    console.log(props,pathname)
    return (
        <Header>
            <List>
                <Item current={pathname == "/"}>
                    <Link to="/">Movies</Link>
                </Item>
                <Item current={pathname == "/tv"}>
                    <Link to="/tv">TV</Link>
                </Item>
                <Item current={pathname == "/search"}>
                    <Link to="/search">Search</Link>
                </Item>
            </List>
        </Header>
    );
}

export default withRouter(HeaderC);