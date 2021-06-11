import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {

  const [users, setusers] = useState([]);

  useEffect(() => {
    (async () => {
      const user = await axios.get('https://jsonplaceholder.typicode.com/users')
      setusers(user.data)
    })()
    return () => {
      
    }
  }, [])

    return (
    <div className="container">
      <h1 className="text-center">All Users</h1>
      <h3 className="text-center">Total Users: {users.length}</h3>

      <div className="row">
        {users.map((user) => (
          <div className="col-sm-4" key={user.id}>
            <Link to={`users/${user.id}`}>
              <h2>{user.name}</h2>
            </Link>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

    </div>


  );
}
