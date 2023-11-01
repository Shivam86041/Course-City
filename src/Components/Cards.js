import React, { useState } from 'react'
import Card from "./Card"

const Cards = ( {courses, category} ) => {
    let allcourses = [];
    const[likedCourses, setLikedCourses] = useState([]);
    const getCourses=()=>{
      if(category === "All"){
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allcourses.push(course);
            })
        })
        return allcourses;
      }
      else{
          return courses[category];
        }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
      getCourses().map((course)=>{
        return <Card likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} key={course.id} course = {course}/>
      })
    }
    </div>
  )
}

export default Cards
