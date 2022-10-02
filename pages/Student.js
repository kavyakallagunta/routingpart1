import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Student = () => {
    return (
        <div>
            <h3>choose students to view details</h3>
            <NavLink to="Student1">Student1</NavLink> <br/>
            <NavLink to="Student2">Student2</NavLink> <br/>
            <NavLink to="Student3">Student3</NavLink> <br/>
            <Outlet/>

            
        </div>
    );
};

export default Student;