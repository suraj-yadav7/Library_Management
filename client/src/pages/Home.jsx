import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from '../components/Book';

const Home = () => {
  const [bookData, setBookData]=useState('')
  let arr=[1,2,3,4,5,6,7,8]
  let base_url=import.meta.env.VITE_BASE_URL

  const fetchBooks=async()=>{
    let response = axios.get(`${base_url}/api/get-books`)
    setBookData(response?.data?.booksList)
  }

  useEffect(()=>{
    fetchBooks();
  },[]);
  
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