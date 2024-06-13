import React from 'react'

const Book =()=>{
    return(
        <>
            <div className='bookContainer max-w-sm rounded overflow-hidden shadow-lg m-4'>
                <div className='w-full flex justify-center'>
                    <img src="https://via.placeholder.com/150"></img>
                </div>
                <div className='px-6 py-4'>
                    <h3>Book Title</h3>
                    <p>Book description</p>
                    <h4>Copies available</h4>
                </div>
                <div className='px-6 pt-4 pb-2'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Borrow It</button>
                </div>
            </div>
        </>
    )
}

export default Book;