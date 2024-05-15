import React, {useState,useEffect} from 'react'
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import loader from "../assets/loader.gif"
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { setAvatarRoute } from '../utils/APIRoutes'

export default function SetAvatar() {
    const api = `https://randomuser.me/api/portraits/men`;
    const navigate = useNavigate();
    const [avatarURL, setAvatarURL] = useState("");
    const [text, setText] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [secondsLeft,setSecondsLeft] = useState(100000);

    const toastOptions = {
        position:'bottom-right',
        autoClose:8000,
        pauseOnHover:true,
        draggable: true,
        theme: "dark",
    }

    useEffect(()=>{
        if(!localStorage.getItem("chat-app-user")){
            navigate('/login');
        }
    },[])

    const setProfilePicture = async () => {
        const user = await JSON.parse(localStorage.getItem("chat-app-user"));
        const {data} = await axios.post(`${setAvatarRoute}/${user._id}`,{
            image: avatarURL,
        });
        if(data.isSet){
            user.isAvatarImageSet = true;
            user.avatarImage = data.image;
            localStorage.setItem("chat-app-user",JSON.stringify(user));
            navigate('/');
        }else{
            toast.error("Error setting avatar... Please try again",toastOptions);
        }
    }
    useEffect(() => {
        // Make API call and update avatar URL state
        const apiURL = `https://avatars.dicebear.com/api/avataaars/${text}.svg`;
        setAvatarURL(()=>{return apiURL});
      }, [text]);

    function handleTextChange(event) {
        // Update state with the new text entered in the text box
        setText(event.target.value);
      }

    useEffect(()=>{
        if(secondsLeft === 0)
            setIsLoading(false);
        else
            setSecondsLeft((secondsLeft)=>{return secondsLeft-1});
    })

    return (
        <>
            {
                isLoading ? 
                <Container>
                    <img src={loader} alt="loader" className='loader'/>
                    <div className="title-container">
                        <h1>Your Profile is getting ready</h1>
                    </div>
                </Container>
                :
                <Container>
                    <div className="title-container">
                        <h1>Define yourselves to pick an avatar</h1>
                    </div>
                    <div className="avatars">
                        <input type="text" onChange={handleTextChange} />
                        <img src={avatarURL} alt="Avatar" className="avatar"/>
                    </div>
                    <button className='Submit-btn' onClick={setProfilePicture}>Set as Profile Picture</button>
                </Container>
            }
            
            <ToastContainer></ToastContainer>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    background-color: #131324;
    height: 100vh;
    width: 100vw;
    .loader{
        max-inline-size:100%
    }
    .title-container{
        h1{
            color: white;
            text-transform: uppercase;
        }
    }
    .avatars{
        input{
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #7000c1;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus{
                border:0.1rem solid #997af0;
                outline: none;
            }
        }
        .avatar{
            border:0.4rem solid transparent;
            img{
                height: 6rem;
            }
        }
    }
    button{
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size:1rem;
            text-transform: uppercase;
            &:hover{
                background-color: #4e0eff;
                transition: 0.5s ease-in-out;
            }
        }
`;