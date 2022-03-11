import React from 'react';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { userActions } from "./features/reducers/UserDataReducer"
import './App.css';
import Card from "./components/Card/Card.js"
import { BookLoader } from "react-awesome-loaders";



function App() {
  const userData = useSelector((state)=>state)  
  const dispatch = useDispatch();
  
 

  // const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState();

 
  const pageNumbers = [];

  for (let i = 0; i < userData.userData.length; i++) {
    pageNumbers.push(userData.userData[i].id);
  }





  useEffect(() => {
    async function userFetch() {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");

        if (!response.ok) {
          throw new Error("Server Error")
        }

        else {
          const data = await response.json();
         
          dispatch(userActions.ADD(data.data))
          
        }
      }
      catch (e) {
        console.log(e)
      }

    };

    const interval = setTimeout(userFetch, 3000);

    return () => {
      clearTimeout(interval)
    }
  }, [])



  function fetchUser(id) {
    (async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);

        if (!response.ok) {
          throw new Error("Server Error")
        }

        else {
          const data = await response.json();
          setCurrentUser(data.data)

        }
      }
      catch (e) {
        console.log(e)
      }

    })();
  };




  return (
    <div className="App">
      <div className="user-info-container">

        {userData.userData.length === 0 ?
          <div className="spinner">
            <BookLoader
              background={"linear-gradient(135deg, #9D9D9D, #fffbfb)"}
              desktopSize={"80px"}
              mobileSize={"40px"}
              textColor={"#212121"}
            />
          </div> :
          currentUser ?
            <Card userData={currentUser} /> : <Card userData={null} />
        }






      </div>

      <ul className='pagination' id="paginatorr" onClick={(e) => { fetchUser(e.target.id) }}>

        {pageNumbers.map((number, index) => (

          <button key={number} id={number} className='page-link'>
            {index + 1}
          </button>

        ))}
      </ul>


    </div>
  );
}

export default App;
