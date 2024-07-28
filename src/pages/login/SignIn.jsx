import React,{ useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../../Services/allAPI';

function SignInForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const handleLogin = async (e)=>{
    e.preventDefault()
    if(userData.email && userData.password){
      //api call
      try{
        const result = await loginAPI(userData)
        console.log(result);
        if(result.status==200){
          //setIsLoggedin(true)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          //setIsAuthorised(true)
          toast.info(`Welcome ${result.data.user.username}..`)
          
          setTimeout(()=>{
            setUserData({
              username:"",email:"",password:""
            })
            //setIsLoggedin(false)
            navigate('/dashboard')},1500)
        }else{
          if(result.response.status==404){
            toast.error(result.response.data)
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.info("Please fill the form completely")
    }
  }

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1 className="signin">Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={e=>setUserData({...userData,email:e.target.value})}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={e=>setUserData({...userData,password:e.target.value})}
        />

          <button onClick={handleLogin}>Sign In</button>

        
      </form>
      <ToastContainer position='top-center' theme='colored' autoclose={3000} />

    </div>
  );
}

export default SignInForm;
