import React from 'react';
import "./postview.css";
import { useEffect } from 'react';
import Logo from '../assets/logo.png';
import Camera from "../assets/camera-logo.png";
import { useState } from 'react';

const Postview = () => {

    const [userData, setUserData]=useState([]);

    useEffect(()=>{
    
    fetch(' http://localhost:3000/user').then((data)=>{
            return(data.json());
    }).then((userdata)=>{
        setUserData(userdata);
        console.log(userdata);
    });
  }, []);

  return (
    <div>
      <div className='container'>
            <header>
                <div className="nav">
                    <img src={Logo} alt="insta-logo"  />
                    <img src={Camera} alt="camera-logo" />
                </div>
            </header>
            <hr />
            <div >
                {
                    userData.map((user,i)=>{
                        return(

                            <div className="post" >
                                <div className="user-information" key={i}>
                                    <h3>{user.name}</h3>
                                    <span>{user.location}</span>
                                    
                                </div>
                                <div className="user-postimg">
                                    <img className='postimg' src={user.PostImage} alt="user-post" />
                                </div>
                                <div className="user-meta">
                                    <span>{user.date}</span>
                                </div>
                                <div className='user-likes'>
                                    {user.likes}
                                </div>
                                <div className='user-description'>
                                    {user.description}
                                </div>
                            </div>
                        );
                    })
                };
            </div>
      </div>
    </div>
  )
}

export default Postview
