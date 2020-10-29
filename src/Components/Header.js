import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
        <ul>
            <li><Link href="/">Movies</Link></li>
            <li><Link href="/tv">TV</Link></li>
            <li><Link href="/search">Search</Link></li>
        </ul>
        </header>
    ) 
}

export default Header;