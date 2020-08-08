import React, { useContext } from 'react'
import { BookContext } from '../context/bookContext'

function BookDetails({book}){

    const {dispatch} = useContext(BookContext)


    return(
        <li onSubmit={()=>dispatch({type:"REMOVE_BOOK",id:book.id})}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <button onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
            Delete
            </button>
        </li>
    )
}

export default BookDetails