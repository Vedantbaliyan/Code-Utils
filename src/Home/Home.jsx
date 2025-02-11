import React from 'react'

function Home() {
  return (
    <div>
      <div style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SRO1PUq0rvhHsMtWOH5-tJlHA_IqZIxdeE2UO4JiObSBFBXaJivymUiChhDKpQ7Lc4s&usqp=CAU)`}} className='bg-gray-400 text-white flex flex-col items-center p-28 w-screen h-screen'>
      <h1 className='font-bold text-6xl text-red-400'>Welcome To CodeUtils</h1>
      <h1 className='text-2xl'>You Can Click On <strong>PasswordGenerator</strong> For Using <strong>Password Generator Utility</strong></h1>
      <h1 className='text-2xl'>You Can Click On <strong>CurrencyConvertor</strong> For Using <strong>Currency Convertor Utility</strong></h1>
      </div>
      {/* <img className='w-screen h-screen' src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="" /> */}
    </div>
  )
}

export default Home
