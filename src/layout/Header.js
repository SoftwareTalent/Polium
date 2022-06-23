import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation } from 'react-router-dom';
import MainMenu from './MainMenu';

export default function Header() {
  const [isConnectedWallet, setConnectedWallet] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/overview') setConnectedWallet(true);
    else setConnectedWallet(false);
  }, [pathname]);
  return (
    <div className='flex justify-between gap-4 w-full max-w-6xl p-4 items-center'>
      <div className='flex gap-8 items-center '>
        <Link to='/'>
          <img
            src='/assets/logo.svg'
            alt='logo'
            className='cursor-pointer'
          ></img>
        </Link>

        <MainMenu />
      </div>

      <div className='flex gap-4 justify-end items-center'>
        {isConnectedWallet && (
          <div className='flex items-center'>
            <img src='/assets/ticket-star.svg' className='h-8'></img>
            <span>5100</span>
          </div>
        )}
        {!isConnectedWallet && (
          <Link to='pre-order' className='font-khula text-[16px]'>
            Pre-Order
          </Link>
        )}

        <button className='btn btn-outline btn-accent btn-sm rounded-sm sm:px-12 font-khula'>
          {!isConnectedWallet && <span>Connect</span>}
          {isConnectedWallet && <span>0x33...dd31</span>}
        </button>
      </div>
    </div>
  );
}
