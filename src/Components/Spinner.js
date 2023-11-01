import React from 'react'
// import Loading_icon from "../Loading_icon.gif";

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>

      <div className='spinner'></div>
        {/* <img src={Loading_icon} alt="" /> */}
        <p className='text-bgDark text-lg font-semibold'>Loading...</p>
      
    </div>
  )
}

export default Spinner
