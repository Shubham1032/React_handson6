
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './DataContext';
import '../App.css'

const handleAdd = ()=>
{
    console.log("Add called")
}

function Table() {
  const context = useContext(DataContext);
  // context is the value that we have provided
  console.log(context);
  return (
    <div className='Maindiv'>
      <div >
        <span id='Sttableheading'>Student Table</span>
  <Link to='/addStudent'>
    <button onClick={handleAdd} id='btnforadd'>Add New</button>
    </Link>
     </div>
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          {/* <th>ID</th> */}
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
    
      <tbody>
       
        {
        
        context.entries.map((item,index) => {
          return(
          // each item is an object
            <tr key={index}>
            <td>{item.name}</td>
            {/* <td>{item.id}</td> */}
            <td>{item.age}</td>
            <td>{item.course}</td>
            <td>{item.batch}</td>
            
            <td>
              {/* Pass the ID of the row to fetch the data in the edit compoennt */}
               
                <Link to='/editStudent' state={{data:index}}>

                    Edit
                </Link>
                
            </td>
          </tr>
      )  })}
      </tbody>
    </table>
    </div>
  );
}

export default Table;