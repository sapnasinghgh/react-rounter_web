import React, { useEffect, useState } from 'react'

function Github() {
 const [ data,setdata] = useState([])
  useEffect(()=>{
    fetch(`https://api.github.com/users/sapnasinghgh`)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setdata(data)
      // console.log();
      
    })


   
  },[])
  return (
    <> 
   
     <div className='  bg-gray-600     flex'>
      <div >
        <img src={data.avatar_url }  alt='github picture ' />

      </div>
      <div className='p-9 text-center m-7 text-2xl text-white '>
        <h4>Name :{data.name}</h4>
        <br/>
       <h4> Github : {data.login}</h4>
        <br/>
        <h4>Repository : {data.public_repos}</h4>
        <br/>
        Bio : {data.bio}
      </div>

      
     
     </div>
     
   
    </>

    )
}

export default Github
