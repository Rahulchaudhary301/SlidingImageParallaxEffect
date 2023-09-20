import React from 'react'
import '../index.css'

function ImageSliding({ data }) {
   return (
      <>
         <div className='bg-1'>
            <h1>I LOVE NASA</h1>
         </div>

         <div className='bg-2'>
            <h1>AWESOME GALAXY</h1>
         </div>

         <div id='third' className='bg-3'>
            <h1>WOUNDERFULL LOOKS</h1>
         </div>

         <div className='bg-4'>
            <h1>ITS SO HOT SPACE</h1>
         </div>

         <div className='bg-5'>
            <h1>BEAUTIFUL MILKY WAY</h1>
         </div>
      </>
   )
}

export default ImageSliding
