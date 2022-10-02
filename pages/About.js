// import React from 'react';

// const About = () => {
//     return (
//         <div>
//             <h3>this is about page</h3>
//         </div>
//     );
// };

// export default About;

// links in link


import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
           
            <h3>this is about page</h3>
           
            <NavLink to="Svecw">Svecw</NavLink> &nbsp;  &nbsp;  &nbsp;
            <NavLink to="It">It</NavLink>
            <Outlet/>
            

        </div>
    );
};

export default About;