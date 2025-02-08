import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
  return (
    <div className=' text-center m-4 mt-30 pb-12 bg-lightblue text-black font-medium p-4 text-3xl'> My Github followers: {data.followers}
    <img className='rounded-4xl' src={'https://res.cloudinary.com/dc3h8zsv3/image/upload/v1736533322/zckbb98pou2bargenlac.jpg'} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}