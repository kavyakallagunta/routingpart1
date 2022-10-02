//1. it change pages when you change in localhost browser

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home';
// import Pagenotfound from './pages/Pagenotfound';

// const App = () => {
//     return (
//         <div>
//             <h3>App component</h3>
//             <Routes>
//                 <Route path='' element={<Home/>}/>
//                 <Route path='about' element={<About/>}/>
//                 <Route path='*' element={<Pagenotfound/>}/>

//             </Routes>

//         </div>
//     );
// };

// export default App;


// 2.links

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home';
// import Pagenotfound from './pages/Pagenotfound';
// import Navbar from './pages/Navbar';

// const App = () => {
//     return (
//         <div>
//             <h3>App component</h3>
//             <Navbar/>
//             <Routes>
                
//               <Route path='home' element={<Home/>}/>
//                 <Route path='about' element={<About/>}/>
//                 <Route path='*' element={<Pagenotfound/>}/>
               
//             </Routes>
            

//         </div>
//     );
// };

// export default App;

// 3.links in link
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home';
// import Pagenotfound from './pages/Pagenotfound';
// import Navbar from './pages/Navbar';
// import Svecw from './pages/Svecw';
// import It from './pages/It';

// const App = () => {
//     return (
//         <div>
//             <h3>App component</h3>
//             <Navbar/>
            
//             <Routes>
                
//               <Route path='home' element={<Home/>}/>
//                 <Route path='about' element={<About/>}>
//                 <Route path='Svecw' element={<Svecw/>}/>
//                 <Route path='It' element={<It/>}/>
//                 </Route>
//                 <Route path='*' element={<Pagenotfound/>}/>
               
//             </Routes>
            

//         </div>
//     );
// };

// export default App;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Student from './pages/Student';
import Student1 from './pages/Student1';
import Student2 from './pages/Student2';
import Student3 from './pages/Student3';


const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='Student'element={<Student/>}>
                    <Route path='Student1' element={<Student1/>}/>
                    <Route path='Student2' element={<Student2/>}/>
                    <Route path='Student3' element={<Student3/>}/>
                </Route>

            </Routes>
        </div>
    );
};

export default App;