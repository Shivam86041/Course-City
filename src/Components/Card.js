import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setLikedCourses}) => {
  let content = course.description;
  let description = content.substring(0, 100)
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //pehle se liked hua pda hai
      setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)))
      toast.warning("Like Removed")
    }
    else{
      //pehle se like nhi hai
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev) =>[...prev, course.id]);
      }
      toast.success("Liked SuccessFully");
    }
  }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
            <img src={course.image.url} alt="" />
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-14px] grid place-items-center'>
              <button onClick={clickHandler}>
                {likedCourses.includes(course.id)?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>}
              </button>
            </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{description}...</p>
      </div>
    </div>
  )
}

export default Card
