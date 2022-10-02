// 2.links


// import React from 'react';
// import {  NavLink } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <div>
//             <NavLink to="home">Home</NavLink>
//             <NavLink to="about">About</NavLink>
//         </div>
//     );
// };

// export default Navbar;



// 3.isActivemethod
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     const changetext=({isActive})=>{
//         return{
//             color:isActive?'red':'green'
           
//         }
//     }
//     return (
//         <div>
//             <table>
//                 <tr>
//                     <td>
//             <NavLink style={changetext} to="Home">Home</NavLink>
//             </td>
//             <td>
//             <NavLink style={changetext} to="About">About</NavLink>
//             </td>
//             </tr>
//             </table>
//         </div>
//     );
// };

// export default Navbar;



// links in link

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// const Navbar = () => {
//     const changetext=({isActive})=>{
//         return{
//             color:isActive?'red':'green'
           
//         }
//     }
//     return (
//         <div>
//             <table>
//                 <tr>
//                     <td>
//             <NavLink style={changetext} to="Home">Home</NavLink>
//             </td>
//             <td>
//             <NavLink style={changetext} to="About">About</NavLink>
//             </td>
//             </tr>
//             </table>
//         </div>
//     );
// };

// export default Navbar;


import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to="Student">Student</NavLink>
        </div>
    );
};

export default Navbar;