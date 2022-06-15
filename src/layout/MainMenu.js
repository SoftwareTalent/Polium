import {Link, useLocation} from 'react-router-dom';

const ROUTES = [
    {title:"Overview", path:"/overview"},
    {title:"Faq",path:'/fag'},
    {title:"Road Map",path:'/roadmap'},
    {title:"Polium Pass",path:'/polium-pass'}
]

export default function MainMenu(){
    const {pathname} = useLocation();
    return(
        <div className="hidden sm:flex gap-4">
            {ROUTES.map((router,index)=>(
                <Link className={`${pathname === router.path ?'text-accent':''}`} to = {router.path} key={index}>{router.title}</Link>
            ))}
        </div>
    )
}