import React  from 'react'
import Table from './Table'
import { useAuth } from '../contextApi/store'
// import GetDatabackend from '../example/getdatabackend'

function Home() {
   const {isLoggedIn} = useAuth();
  return (
    
    <div>
      {isLoggedIn ?
      (  <Table/>):(
        <h1>Please login to Show data</h1>
      )
      } 
     
    </div>
  )
}

export default Home

