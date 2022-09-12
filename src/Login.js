import React,{ useRef, useState, useEffect } from "react";
import img10 from './Logo.png';

//import Tilt from 'react-parallax-tilt';
//import AuthContext from "./context/AuthProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import axios from "axios";
import Axios from "./api/axios"
import { useNavigate } from "react-router-dom";
// import ReactDOM from 'react-dom';
const LOGIN_URL = '/Auth';

const Login = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        if (user==='')
        {
            setSuccess(false);
        }
    },[user]);

    useEffect(()=>{
        if (success===true)
        {
            navigate("/Home");
        }
    },[success,navigate])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
       // Axios.get("/found").then(res => setNotes(res.data));
        
       fetch("http://localhost:3001/found").then(res => res.json())
       .then(jsonRes =>{ 
        jsonRes.reverse();
        setNotes(jsonRes);});

        console.log(notes);
        notes.forEach((notes)=>{
            const st=notes.username;
            const tt=notes.password;
            const pst={
                username: st,
                password: tt
            };
            
            console.log(notes+",," +st+",,,"+tt);
            console.log(st);
            if (user===st)
            {
                if (pwd===tt)
                {
                    Axios.post(LOGIN_URL,pst);
                    setSuccess(true);

                }
                
                else if (pwd!==tt)
                {
                    setErrMsg("Wrong Password for this username");
                    return 0;
                }
                userRef.current.focus();
            }
            else if(user!==st)
            {
                setErrMsg("Either username or password is wrong.");
            }
        })
    }

    function success2()
    {
        navigate("/Home");
    }

    return (
        <>
            {success ? (
                <div>
                    {success2}
                    {/* NEED TO ADD */}
                </div>
            ) : (
                
                <div className="rbody">
                    <div className="logof">
                        <img src={img10} alt="alt"></img>
                    </div>
                <section className="app sec mcard"> 
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className="signin">Sign In</h1>
                    <form onSubmit={handleSubmit} className='polo'>
                        <label className="uname" htmlFor="username">Username:</label>
                        <input
                            className='kolo'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label className="uname " htmlFor="password">Password:</label>
                        <input
                            className='kolo'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        
                        <button className='butto kolo neon'>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            Sign In</button>
                    </form>
                    <p className="needac">
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/Register">Sign Up</a>
                        </span>
                    </p>
                </section>
                </div>
                
            )}
        </>
    )
}

export default Login;