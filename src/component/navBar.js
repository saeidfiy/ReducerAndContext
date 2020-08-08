import React,{useContext} from 'react'
import {BookContext} from "../context/bookContext"

function NavBar(){

    const {books} = useContext(BookContext)

    return(
        <div>
            <h1>Book List NAV</h1>
            <div>you have {books.length}</div>
        </div>
    )
}

export default NavBar