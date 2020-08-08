import React,{useContext} from 'react'
import { BookContext } from '../context/bookContext'
import BookDetails from './bookDetails'



function BookList()
{
    const {books} = useContext(BookContext)
    return books.length ?
    (
        <div>
            <ul>
            {books.map(book => {
                return (<BookDetails book={book} key={book.id} />);
            })}
            </ul>
        </div>
    )
    :
    (<div>
        Book list is empty
    </div>)
}

export default BookList