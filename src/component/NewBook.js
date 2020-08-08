import React,{useContext,useState} from 'react'
import { BookContext } from '../context/bookContext'


function NewBook()
{   
    const[title,setTitle] = useState('')
    const[author,setAuthor] = useState('')

    const{dispatch} = useContext(BookContext)

    const handelSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:"ADD_BOOK",book:{title:title,author:author}})
        setTitle('')
        setAuthor('')
    }

    return(
        <form onSubmit={handelSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  required/>
            <label>Author</label>
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}  required/>

            <input type="submit" value="make" />

        </form>
    )
}

export default NewBook;