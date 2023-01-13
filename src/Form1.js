import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Form1(props){
   const navigate = useNavigate();
 const [memail,getemail]=useState('')
 const [mpassword,getpassword]=useState('')

   function emaill(e){
    getemail(e.target.value)
    }
    function passwordl(e){
      getpassword(e.target.value)
    }
    function fun(e){
      
      // console.log(memail);
      // console.log(mpassword);
      e.preventDefault()
      axios.post("https://63bfb6eda177ed68abb66604.mockapi.io/tamil",
      {
      email:memail,
       password:mpassword
      }
      )
      .then((res)=>{
        console.log(res);
        // getemail('')
      // getpassword('')
      navigate('/Data')
      })


      
    } 
    
     
    
    return(
        <div>
        <form className='form'>
          <label> Enter the email<input type="email"  onChange={props.emaill}></input></label> <br></br>
          <label> Enter the password<input type="password"   onChange={passwordl}></input> </label> <br></br>
          {/* <input type="submit" onClick={()=>navigate("/Data")}></input> */}
          <input type="submit" onClick={fun}></input>
        </form>
    
      </div>

    )
}
export default Form1;