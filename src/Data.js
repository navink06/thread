import './Data.css'
import {useNavigate} from "react-router-dom"
import axios  from 'axios';
import { useEffect, useState } from 'react';
function Data(props){
    
       const navigate = useNavigate();
       const [first,setfirst]=useState([]);


       function getdata(){
       axios
       .get("https://63bfb6eda177ed68abb66604.mockapi.io/tamil")
       .then((res)=>{
        console.log(res.data);
        setfirst(res.data)

       })
       useEffect(()=>{
        getdata();
       },[])

       }
    return(
        <div>
        <div>
            <button className='back' onClick={()=>navigate("/")}>back to form</button>

            
            <table>
                <tr>
                    <th>S.no</th>
                    <th>Id</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>edit or delete</th>
                 </tr>
                 <tr >
                    <td>1</td>
                    <td>{first.getdata}</td>
                    <td>{<Form1>{props.input}</Form1>}</td>
                    <td>{first.getdata}</td>
                    <td><button onClick={()=>navigate("/")}>edit</button>
                    <button onClick={()=>navigate("/Form")}>delete</button></td>
        
                 </tr>
            </table>
            </div>
        </div>
    )
}
export default Data