// import { useNavigate } from "react-router-dom"

// const Ranking = () => {
//   const navigate = useNavigate()
//   let arr = []
//   for (const [key, value] of Object.entries(localStorage)) {
//     let field = JSON.parse(value).user + " -- " + JSON.parse(value).score
//     arr.push(field)
//   }

//   return (
//     <>
//       <h1>Ranking</h1>
//       <ul>
//         {arr.map((rank) => (
//           <li key={rank}>{rank}</li>
//         ))}
//       </ul>
//       <a onClick={() => navigate("/")}>Home</a>
//     </>
//   )
// }

// export default Ranking
