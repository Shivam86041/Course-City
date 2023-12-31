import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import { apiUrl, filterData} from "./data";
import {toast} from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {

  const[courses, setCourses] = useState([]);
  const[loading, setLoading] = useState(false);
  const[category, setCategory] = useState(filterData[0].title)

  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        // console.log(data);
        setCourses(data.data);
      }
      catch(err){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  }, [])

  return( 
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div >
        <div>
        <Filter category = {category} setCategory = {setCategory} filterinfo = {filterData} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category} />)
        }
        </div>
      </div>

    </div>
  )
}

export default App;
