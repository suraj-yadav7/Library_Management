import React, { useState } from 'react'
import Book from './Book';

const Home = () => {
  const [bookData, setBookData]=useState('')
  let arr=[1,2,3,4,5,6,7,8]

  const fetchBooks=async()=>{
    let response = axios.get('http://localhost:5000/api/getBooks')
    console.log("fetch books: ", response)
    setBookData(response.data.booksList)
  }
  return (
    <>
        <div>
            <div className='flex flex-wrap'>
              {bookData &&
                arr.map((elem)=>
                (
                  <Book/>
                ))
              }
            </div>
        </div>
    </>
  )
};
export default Home;