import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import Services from './Components/Services'

const routes = [
    {
        path: '/About',
        exact: false,
        main: ()=><About />
    },
    {
        path: '/Contact',
        exact: false,
        main: ()=><Contact />
    },
    {
        path: '/services',
        exact: false,
        main: ()=><Services />
    },
   
    {
        path: '',
        exact: false,
        main: ()=><NotFound />
    }
    
];
export default routes;