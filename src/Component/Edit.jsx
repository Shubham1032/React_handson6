import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';



function Edit() {
   const context = useContext(DataContext);
   const location = useLocation(); // returns the location object 
    console.log(location.state) // the id present with the state property of the l;ocation object
   const navigate = useNavigate();
   const index = (location.state.data);

    const newObj = {
        name: context.entries[index].name,
     
        age:context.entries[index].age,
        course:context.entries[index].course,
        batch:context.entries[index].batch
        
    }
    
    console.log("Index : " + index)
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       console.log(context.entries[index])
       context.updateFunction(
        (prevObj)=>{
            prevObj[index] = newObj;
            return (prevObj)
        }
       );
       navigate('/table');
    }


   return (
    <div className='Maindiv'>
        <label for='name' className='lableforname'>Name</label>
        <input onChange={handleChange} name='name'  placeholder= {context.entries[index].name}></input>
        <label for='age' className='lableforage lable'>Age</label>
        
        <input onChange={handleChange} name='age'   placeholder= {context.entries[index].age}></input>
        <br/>
        <label for='course' className='lableforcourse lable'>Course</label>

        <input onChange={handleChange} name='course'   placeholder= {context.entries[index].course}></input>
        <label for='batch' className='lableforbatch lable'>Batch</label>

        <input onChange={handleChange} name='batch'   placeholder= {context.entries[index].batch}></input>
     <br></br>   <button className='btnforUpdateEdit' onClick={handleUpdate}>Update</button>
     <Link to='/table'>
     <button className='btnforcancelEdit'>Cancel</button></Link>
    </div>
  )
}

export default Edit;