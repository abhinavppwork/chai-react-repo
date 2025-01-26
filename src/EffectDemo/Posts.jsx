import { useState,useEffect } from "react"
import { ClimbingBoxLoader } from "react-spinners";

function Posts() {
    let [posts,setPosts] = useState([]);
    let [err,setErr] = useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceolder.typicode.com/posts')
        .then(res=>res.json())
        .then(postlist=>setPosts(postlist))
        .catch(e=>setErr(e))
    },[])
  return (
    <div>
        {
    err && err.message ? (
            <h1 className="text-danger">{err.message}</h1>
            ) : (
            null
            )
        }
      {
        posts.length ===0 ? <ClimbingBoxLoader /> : 
        <>
        <h1 className="display-1 text-warning">Posts</h1>
        <table className="table">
        <thead>
            <tr>
                <th>UserID</th>
                <th>ID</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
            {
                posts.map(postObj=> <tr key={postObj.id}>
                    <td>{postObj.userId}</td>
                    <td>{postObj.id}</td>
                    <td>{postObj.title}</td>
                </tr>)
            }
        </tbody>
      </table>
      </>
      }
      
    </div>
  )
}

export default Posts
