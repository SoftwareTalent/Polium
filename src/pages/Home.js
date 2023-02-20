import { Icon } from '@iconify/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ConsoleFeature from '../sections/home/ConsoleFeature';
import ControllerFeature from '../sections/home/ControllerFeature';
import FaqList from '../sections/home/FaqList';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <video
        className='w-full border mb-[-1px]'
        autoPlay={'autoplay'}
        preload='auto'
        loop
        muted
      >
        <source
          src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          type='video/mp4'
        />
      </video>
      {/* <LazyLoadImage
        alt=''
        src='/assets/banner.jpg'
        effect='blur'
        wrapperClassName='w-full'
        className='w-full'
      /> */}
      {/* banner description */}
      <div className='flex flex-wrap gap-20 bg-black text-white py-4 -mt-1 justify-center h-18 '>
        <div></div>
        <div className='flex flex-col items-center justify-center '>
          <label className='text-2xl md:text-4xl sm:text-3xl  font-bold font-poppins h-12 uppercase'>
            4K
          </label>
          <span className='font-poppins'>4K Ultra HD</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/assets/touch-id.svg'
            className='h-10 w-10 md:h-12 md:w-12 '
            alt='touch-icon'
          ></img>
          <span className='font-poppins'>TouchID</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <label className='text-2xl md:text-4xl sm:text-3xl font-bold h-12 uppercase font-poppins'>
            8K HDR
          </label>
          <span className='font-poppins'>High Dynamic Range</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/assets/ray.svg'
            className='h-10 w-10 sm:h-12 sm:w-12'
            alt='ray-icon'
          ></img>
          <span className='font-poppins'>Ray tracing</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <label className='text-2xl md:text-4xl sm:text-3xl font-bold h-12 uppercase font-poppins'>
            Up to 120
          </label>
          <span className='font-poppins'>Frames per second</span>
        </div>
        <p className='p-8 text-sm'>
          Disclaimer: We aim to build a high performance gaming console. The
          features above are not confirmed until we have a functional prototype.
        </p>
      </div>
      {/* multi chain consle */}
      <div
        className='flex flex-col items-center text-black'
        style={{ background: '#9558c447 ' }}
      >
        <label className='text-[48px]  font-bold font-poppins mt-[49px] mb-[32px]'>
          {' '}
          It's a Multi-chain console
        </label>
        <p className='text-[20px] font-poppins mb-[95px]'>
          Discover & Play Ethereumn, Solana and Polygon games without needing to
          switch chain
        </p>
        <div className='flex flex-row w-full items-center justify-evenly mb-[84px]'>
          <LazyLoadImage
            className='h-14 sm:h-28 md:h-[211px]'
            src='/assets/ethereum-(eth).png'
          ></LazyLoadImage>
          <LazyLoadImage
            className='h-14 sm:h-28 md:h-[211px]'
            src='/assets/solana-(sol).png'
          ></LazyLoadImage>
          <LazyLoadImage
            className='h-14 sm:h-28 md:h-[211px]'
            src='/assets/polygon-(matic).png'
          ></LazyLoadImage>
        </div>
        <span className='text-[20px] font-poppins mb-[40px]'>
          and many more
        </span>
      </div>
      <div
        className='flex flex-col items-center justify-center  text-black'
        style={{ background: '#3EB78440' }}
      >
        <label className='text-[36px]  font-bold font-poppins mt-[37px]'>
          {' '}
          Dashboard
        </label>
        <p className='text-[20px] font-poppins mt-[32px] mb-[89px]'>
          A clean dashboard so that you can enjoy Web 3 more effeciently.
        </p>
      </div>
      {/* console features */}
      <ConsoleFeature />
      {/* -------- */}
      <div
        className='flex flex-col items-center text-black mb-[36px]'
        style={{ background: '#3e60b740' }}
      >
        <label className='text-[36px] mt-[28px] font-bold font-poppins'>
          {' '}
          Dual3 Controller
        </label>
        <p className='text-[20px] font-poppins mt-[33px] mb-[97px]'>
          A controller that is built for Web 3 gaming.
        </p>
      </div>
      {/* ControllerFeature */}
      <ControllerFeature />
      {/* -------- */}
      {/* Multilingual console*/}
      <div
        className='flex flex-col items-center text-black mb-[157px]'
        style={{ background: '#F33C3C40' }}
      >
        <label className='text-[48px] mt-[67px] mb-[32px]  font-bold font-poppins'>
          {' '}
          It's a Multilingual console
        </label>
        <p className='text-[20px] font-poppins mb-[95px]'>
          Pay games that are built from many different technologies.
        </p>
        <div className='flex justify-evenly items-center w-full mb-[159px]'>
          <div className='w-20 sm:w-28'>
            <Icon icon='tabler:brand-javascript' width={'100%'}></Icon>
          </div>
          <div className='w-20 sm:w-28'>
            <Icon icon='bxl:c-plus-plus' width={'100%'}></Icon>
          </div>
          <div className='w-20 sm:w-28'>
            <Icon icon='bxl:python' width={'100%'}></Icon>
          </div>
          <div className='w-20 sm:w-28'>
            <Icon icon='teenyicons:c-sharp-solid' width={'100%'}></Icon>
          </div>
          <div className='w-20 sm:w-28'>
            <Icon icon='ant-design:html5-outlined' width={'100%'}></Icon>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <FaqList />
      {/* ------------------- */}
      {/* Estimated */}
      <div
        className='flex flex-col items-center text-black mb-[193px]'
        style={{ background: '#e4d5f0' }}
      >
        <h2 className='text-[36px]  font-bold font-poppins mt-[105px]'>
          Estimated Launch Date: 2024
        </h2>
        <p className='text-[20px] mb-8 font-poppins mt-[54px]'>
          We are building it. It will be worth the wait. It’s the future of
          gaming
        </p>
        <div className='flex justify-center gap-6 mb-12 flex-col sm:flex-row mt-[83px]'>
          <button className='btn btn-outline px-12 text-[16px] btn-md font-poppins rounded-none border-2'>
            Pre-oder
          </button>
          <button className='btn btn-outline px-12 text-[16px] btn-md font-poppins rounded-none border-2'>
            Whitepaper
          </button>
          <button className='btn btn-outline px-12 text-[16px] btn-md font-poppins rounded-none border-2'>
            Discord
          </button>
        </div>
      </div>
    </div>
  );
}
