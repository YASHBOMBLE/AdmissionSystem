import {React,useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import './Signup.css'
function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    //for signing up user
    async function signupUser() {
   
  
        const response = await axios.post('/signup', {
          name: name,
          email: email,
          phone: phone,
          password: password,
          role: role
        })
    
     
        
        console.log(response.data)
        if (response.data.success) {
     
            await Swal.fire({
                icon: "sucess",
                title: "Sucess",
                text: response.data.message,
            });
    
          window.location.href = '/login'
           
    
        }
        else {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response.data.message,
            });
          setName('')
          setEmail('')
          setPhone('')
          setPassword('')
    
        }
        
      }
  return (
    <div>
         <div class="bg-img">
                <div class="content">
                    <header>Signup Form</header>
                    
                        <div class="field">
                            <span class="fa fa-user"></span>
                            <input type="text" required placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class="field space">
                            <span class="fa-solid fa-envelope"></span>
                            <input type="text" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="field space">
                            <span class="fa-solid fa-phone" ></span>
                            <input type="text" required placeholder="Mo.No" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>

                        <div class="field space">
                            <span class="fa fa-lock"></span>
                            <input type={show ? "text" : "password"} class="pass-key" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <span class="show" onClick={handleShow}>{show ? "Hide" : "Show"}</span>
                        </div>



                        <div class="field space">
                            <input type="submit" value="SignUp" onClick={signupUser}/>
                        </div>

                    <div class="signup">
                        Already have an account?
                        <a href="login">Login Now</a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Signup