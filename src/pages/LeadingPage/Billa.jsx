import React from 'react'
import '../styles/billa.css'

const Billa = () => {
  return (
    <div>
      <main className="container">
         <div className='boxContainer'>
         <div className='box1'>
         <h3>Ebook and Digital Publications</h3>
         <p>Discover our amazing collection of digital books, magazines, and educational materials.</p>
         <button><span>Shop now</span></button>
         <div className='imgHolder'>
          <img src="/books-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className='box1'>
          <h3>Digital Art and Design</h3>
          <p>Discover our amazing collection of graphic design assets, digital art, and illustrations</p>
          <button><span>Shop now</span></button>
          <div className='imgHolder'>
          <img src="/colorfultv-removebg-preview.png" alt="" />
          </div>
        </div>
             <div className='box1'>
               <h3>Online Courses and Tutorials</h3>
               <p>Discover our amazing collection of educational content, e-learning courses, and tutorials.</p>
               <button><span>Shop now</span></button>
               <div className='imgHolder'>
               <img src="/onlineEdu-removebg-preview.png" alt="" />
               </div>
             </div>
        <div className='box1'>
           <h3>Events</h3>
           <p>Discover our amazing collection of events, workshops, masterclassNamees.</p>
           <button><span>Shop now</span></button>
           <div className='imgHolder'>
          <img src="" alt="" />
          </div>
        </div>
         </div>
         
      </main>
    </div>
  )
}

export default Billa
