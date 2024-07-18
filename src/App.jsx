import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const getData = async () => {
    const mainData = await axios.get('https://api-backend-nodejs.onrender.com/courses');
    console.log(mainData.data)
    setData(mainData.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <table>
        <tr>
          <th>Sr.No</th>
          {/* <th>id</th> */}
          <th>Course Name</th>
        </tr>
        <tbody>
          {
            data.map((val, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  {/* <td>{val.id}</td> */}
                  <td>{val.courseName}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default App


// import React, { useEffect, useState } from "react"
// import axios from 'axios';

// const App = ()=>{

//   const [data , setData] = useState([])
//  const getData =  async ()=>{
//    const res = await axios.get('http://localhost:5000/')
//    console.log(res.data)
//    setData(res.data)
//   }

//   useEffect(()=>{
//     getData()
//   })
//   return(
//     <>
//     <table>
//       <tr>
//         <th>Sr.No</th>  
//         <th>id</th>
//         <th>Courses</th>
//       </tr>
//       <tbody>
//         {
//           data.map((val , index)=>{
//             return(
//               <>
//               <tr>
//                 <td>{val.id}</td>
//                 <td>{val.id}</td>
//                 <td>{val.courseName}</td>
//               </tr>
//               </>
//             )
//           })
//         }

//       </tbody>
//     </table>



//     </>
//   )
// }
// export default App;