import React ,{useState , useEffect} from "react"
import axios from "axios";

const Home = () => {
  //   const url ="https://graph.facebook.com/102330138996822?access_token=EAANHWPcbvuIBAOLFvGYy9BvCiCeudYe1wL3RUO1cZBasiKiRqyNlFvkowbaRZCryGbWrNxGDUNPdsUwmM8TMV8gkZCcEBinuPYSe7bZBIWlbvSiHXeZAFJyUEAfIygZAswfqUFRZAqHPXZA7nnKdPoQEIufhmsWCSy77VQlTgUgqDP12N2A4yypfWMx32t7uUSN5vbZCt89pacCBcyLJQAD41S4TCTIxRLPsqZBBqUkZChzUdZAYFxhPoOQ4FYAX44WIVOsZD"
  const url ="https://jsonplaceholder.typicode.com/posts"
   //  const url = 'https://jsonplaceholder.typicode.com/users'
  
    const [data, setData] = useState([])
  
    useEffect(() => {
      axios.get(url)
      .then(json => setData(json.data))
    }, [])
   
    const renderTable = () => {
      return data.map(user => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td> 
         </tr>
        )
      })
    }
  
    return (
      <div>
        <h1 id="title">API Table</h1>
        <table id="users">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    )
  }

  export default Home;