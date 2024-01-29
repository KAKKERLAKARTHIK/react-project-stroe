import { useState } from "react"
import "./regi.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Login from "../Login/Login"
import TableObject from "../TableAdding/TabaleObject"
// import Login from "../Login/Login"
const RegistrationForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const [confiomPassword, setConfiomPassword] = useState()
    const [addres, setAddress] = useState()

    const [errorUser, setErrorUser] = useState()
    const [errorEmail, setErrorEmail] = useState()

    const [errorPassword, setErrorPassword] = useState()
    const [errorConfiomPassword, setErrorConfiomPassword] = useState()
    const [fill, fillError] = useState()
    const navigate=useNavigate()

    const handleClick = (e) => {
        let details=[]

       e.preventDefault()
        // let Data=JSON.parse(localStorage.getItem("userDetails"))
        // details=Data==null?[]:Data
        if ( !password || !username  ) {
           fillError("fill  all inputs")
        } else {
            const userDetails = {
                username: username,
                password: password,
                email: email,
                gender: gender,
                state: addres,

            }
        
        
   axios.post("http://localhost:3001/posts",userDetails)
.then((res)=>{
    console.log(res);
    if (username.length!==0) {
        navigate("/Login");
      } else {
        console.error("Registration failed");
      }
})



        }




    }
    const handleUsername = (e) => {

        setUsername(e.target.value)
        if (e.target.value.length < 5 || e.target.value.match(/[0-9]/)) {
            setErrorUser("please set username minimum5 letters and enter to z")
        }
        else {
            setErrorUser("")
        }

    }
    let pass = ""
    const handlePassword = (e) => {
        setPassword(e.target.value)
        pass = e.target.value
        console.log(pass);
        if (e.target.value.match(/[@!3$<%^&*]/)) {
            setErrorPassword("")

        } else {

            setErrorPassword("please use special charecters")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            setErrorEmail("")
        } else {
            setErrorEmail("invalid mail")
        }
    }
    const handleMale = () => {
        setGender("male")
    }
    const handleFemale = () => {
        setGender("female")
    }

    const handleConfiomPassword = (e) => {
        console.log(e.target.value);
        if (password === e.target.value) {
            setErrorConfiomPassword("")
        } else {
            setErrorConfiomPassword("passwordnot matched")

        }


    }
    const handleAdd = (e) => {
        setAddress(e.target.value)
    }







    return (
       
        
      <center> <div id="container">
 
            <h2>Registration form</h2>
        <form onSubmit={handleClick}>
            {/* <label for="email">email:</label> */}
            <input type="email" id="email" value={email} onChange={handleEmail} placeholder="enter email"/><br />
            <small style={{ color: "red" }}>{errorEmail}</small><br />
            {/* <label for="username">username:</label> */}
            <input type="text" id="username" value={username} onChange={handleUsername} placeholder="enter username"/><br />
            <small style={{ color: "red" }}>{errorUser}</small><br />
            {/* <label for="password">password:</label> */}
            <input type="password" id="password" value={password} onChange={handlePassword} placeholder="enter password"/><br />
            <small style={{ color: "red" }}>{errorPassword}</small><br />
            {/* <label for="confiomPassword">confriompassword:</label> */}
            <input type="password" id="confiomPassword" value={confiomPassword} onChange={handleConfiomPassword} placeholder="confirm password"/><br />
            <small style={{ color: "red" }}>{errorConfiomPassword}</small><br />
            <label for="gender" >gender:</label>
            
            <label for="male" >male</label>
            <input type="radio" name="gender" id="male" value={gender} onChange={handleMale} />
            
            <label for="female">female</label>
            <input type="radio" id="female" name="gender" value={gender} onChange={handleFemale} /><br />
            <select value={addres} onChange={handleAdd}>
                <option>select state</option>
                <option >telangana</option>
                <option>andrapradhesh</option>
                <option >karnataka</option>
                <option>tamilnadu</option>
                <option >keral</option>
                <option>maharshta</option>
                <option >odisa</option>
                <option>goa</option>
            </select>
            <input type="submit"/>
            <small style={{ color: "red" }}>{fill}</small><br />
            
        </form>
        <button><Link to={"/Login"}>log in</Link></button>
        
        </div></center> 
      
        
    )

}
export default RegistrationForm