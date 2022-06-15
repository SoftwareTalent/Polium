import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import SuspenseFallback from '../components/SuspenseFallback';
import DefaultLayout from '../layout/DefaultLayout';


const Loadable = (Component) => (props) => {

    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Component {...props} />
        </Suspense>
    )
}

export default function Router(){
    return useRoutes([
       
        { 
            path:'/',
            element:<DefaultLayout />,
            children:[
                {element:<Home />, index:true},
                {element:<PoliumPass />, path:'polium-pass'},
                {element:<Roadmap />, path:'roadmap'},
                {element:<Overview />, path:'overview'},
            ]
        }
    ])
}
// 
const Home = Loadable(lazy(()=>import("../pages/Home")));
const PoliumPass = Loadable(lazy(()=>import("../pages/PoliumPass")));
const Roadmap = Loadable(lazy(()=>import("../pages/Roadmap")));
const Overview = Loadable(lazy(()=>import("../pages/Overview")));

