import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/vaibhavkothari33')
            .then(res => res.json())
            .then(data =>{
                // console.log(data);
                setData(data)
            })
    })
    return (

        <>
            <h1 className='bg-gray-700 m-4 text-white text-center'>Github bio: {data.bio} </h1>
            <h1 className='bg-gray-700 m-4 text-white text-center'>Github followers: {data.followers} </h1>
            <h1 className='bg-gray-700 m-4 text-white text-center'>Github following: {data.following } </h1>
            <img src={data.avatar_url} alt="" width={300} />
        </>
    )
}

export default Github