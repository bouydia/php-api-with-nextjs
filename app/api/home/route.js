/* 
export default async function handler(req, res) {
  try {
    const response = await fetch('http://localhost:8080/api/api.php') // Replace with your PHP API endpoint URL
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
 */