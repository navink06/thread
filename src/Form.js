import { useNavigate } from 'react-router-dom';
import './form.css'
function Form (){
    const navigate=useNavigate();
    return(
        <div className="navin">
            <h1>No data found </h1>
            <button onClick={()=>navigate('/')}> Back form</button>


        </div>
    )
}
export default Form;