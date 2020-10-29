import React from "react"
import {Link} from "react-router-dom"
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
    justify-content:center;
    align-items:center;
    margin-left:20px
`;
const Item = styled.li`
    width:50px;
    text-align:center;
`;

function HeaderC() {
    return (
        <Header>
            <List>
                <Item><Link to="/">Movies</Link></Item>
                <Item><Link to="/tv">TV</Link></Item>
                <Item><Link to="/search">Search</Link></Item>
            </List>
        </Header>
    );
}

export default HeaderC;