"use client"

import { useEffect, useState } from 'react'

 const Home=  () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Using Fetch
    console.log('hhhh')
     
     fetch('http://localhost:8080/api/api.php') // Replace with your PHP API endpoint
       .then(response => {
        return response.json()
      })
      .then(result => {
        setData(result)
      })
      .catch(error => {
        console.error('Error:', error)
      }) 
 
    
  }, [])

  return (
    <div>
      <h1>PHP API Response:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}


export default Home
