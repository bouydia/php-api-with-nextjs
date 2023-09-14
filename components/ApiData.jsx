// components/ApiData.js
import axios from 'axios'

const ApiData = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://example.com/api.php') // Replace with your API URL
      const data = response.data
      console.log(data) // You can use this data in your component
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default ApiData
