import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './Component/Edit';
import Table from './Component/Table';
import DataContext from './Component/DataContext';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Addstudent from './Component/Addstudent';

function App() {
  const [data, setData] = useState([{ name: 'Jhony', id: 1,age:'24',course:'MERN',batch:'Octomber' },{ name: 'Rao', id: 2,age:'24',course:'MERN',batch:'january' },{ name: 'Monu', id: 3,age:'24',course:'MERN',batch:'Octomber' },{ name: 'Sonu', id: 4,age:'24',course:'MERN',batch:'june' },{ name: 'Tony', id: 5,age:'24',course:'MERN',batch:'March' }, { name: 'Jimmy', id: 6,age:'24',course:'MERN',batch:'Octomber'}]);
  return (
    <>
<Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/editStudent' element={
       <DataContext.Provider value={{entries : data, updateFunction : setData}}>
    <Edit/>
    </DataContext.Provider>
    }>
    </Route>
      <Route path='/table' element={
         <DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Table />
         </DataContext.Provider>
      }/>
     
    <Route path='/addStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Addstudent/>
        </DataContext.Provider>
      }/>
    </Routes>
    </>
  );
}

export default App;