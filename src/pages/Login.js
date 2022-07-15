import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { createAPIEndpoint, ENDPIONTS } from "../api/";
import axios from 'axios';
import OrderForm from '../components/Order/OrderForm';
import { useNavigate } from "react-router-dom";
import "F:/cognizant project/Restaurant-FINAL-master/restaurant-app/src/components/Order/Form-2/home.css"
import "F:/cognizant project/Restaurant-FINAL-master/restaurant-app/src/pages/login.css"
const LOGIN_URL = 'http://localhost:53688/api/Admin';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [uid, setUid] = useState('');
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        createAPIEndpoint(ENDPIONTS.ADMIN).fetchById(uid)
            .then(res => {
                let adminList = res.data.map(item => ({
                    uid: item.adminId,
                    user: item.adminUsername,
                    pwd: item.adminPass
                }));
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [uid, user, pwd])

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(LOGIN_URL)
        //console.log(uid+user+pwd)

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ adminId: uid, adminUsername: user, adminPass: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //console.log(response)
            console.log(JSON.stringify(response?.data));
            // setAuth({ uid, user, pwd});
            setUid(uid);
            setUser(user);
            setPwd(pwd);
            setSuccess(true);
            

            nav("/Order")

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className ='form-container'>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/OrderForm">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{color: "red" ,fontFamily: "emoji"}}   className="log2">SIGN IN</h1>
                    <form onSubmit={handleSubmit} className= " form form-group">
                        <div className='form-inputs'>
                        <label className='lable' htmlFor="username">User ID:</label>
                        <input  class="form-control" 
                            type="text"
                            id="uid"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUid(e.target.value)}
                            value={uid}
                            required
                        />
                        </div>
                        <br /><br />

                        <div className='form-inputs'>
                        <label  className='lable' htmlFor="username">Username:</label>
                        <input class="form-control"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        </div>
                        <br /><br />

                        <div className='form-inputs'>
                        <label  className='lable'  htmlFor="password">Password:</label>
                        <input class="form-control"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        </div>
                        <br /><br />
                     <div className='log3'> <button className='btn btn-success'>Sign In</button></div>
                        
                    </form>
                    {/* <p>
                        Need an Account?<br />
                        <span className="line">
                            // { {put router link here} }
                            <a href="#">Sign Up</a>
                        </span>
                    </p> */}
                </section>
            )}
        </div>
    )
}

export default Login
