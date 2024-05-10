import { React, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import './Login.css'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    async function loginUser() {

        const response = await axios.post('/login', {
            email: email,
            password: password,
        })
        console.log(response.data)
        if (response.data.success) {


            await Swal.fire({
                title: "Success",
                text: response.data.message,
                icon: "success"
            });


            localStorage.setItem('currentUser', JSON.stringify(response.data.data));
            window.location.href = "/"
        }
        else {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response.data.message,
            });

            // await swal({
            //     title: "Error",
            //     text: response.data.message,
            //     icon: "error",
            //     button: "Try Again!",
            // });
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser');
        }

        // if(!email || !password)
        //     {
        //         Swal.fire({
        //             icon: "error",
        //             title: "Oops...",
        //             text: "Email or Password Required!",

        //           });
        //     }
    }
    return (
        <div> <div class="bg-img">
            <div class="content">
                <header>Login Form</header>

                <div class="field">
                    <span class="fa fa-user"></span>
                    <input type="text" required placeholder="Email or Phone" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="field space">
                    <span class="fa fa-lock"></span>
                    <input type={show ? "text" : "password"} class="pass-key" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span class="show" onClick={handleShow}>{show ? "Hide" : "Show"}</span>
                </div>
                <div class="pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <div class="field">

                    <input type="submit" value="LOGIN" onClick={loginUser} />
                </div>



                <div class="signup">
                    Don't have account?
                    <a href="signup">Signup Now</a>
                </div>
            </div>
        </div></div>
    )
}

export default Login