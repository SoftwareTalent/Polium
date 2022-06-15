import { Outlet } from 'react-router-dom'
import Footer from './Footer.js'
import Header from './Header.js'

export default function DefaultLayout() {
    return (
        <main className="px-2 sm:px-4 md:px-6 container">
            <div className='flex w-full justify-center'>
                <Header />
            </div>
            <Outlet />
            <Footer />
        </main>
    )
}