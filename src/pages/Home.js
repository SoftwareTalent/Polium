import { Icon } from '@iconify/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ConsoleFeature from '../sections/home/ConsoleFeature';
import ControllerFeature from '../sections/home/ControllerFeature';
import FaqList from '../sections/home/FaqList';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <video
        className='w-full border mb-4'
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
      <LazyLoadImage
        alt=''
        src='/assets/banner.jpg'
        effect='blur'
        wrapperClassName='w-full'
        className='w-full'
      />
      {/* banner description */}
      <div className='flex flex-wrap gap-6 bg-black text-white py-4 -mt-1 justify-center h-18 '>
        <div></div>
        <div className='flex flex-col '>
          <label className='text-2xl md:text-4xl sm:text-3xl  font-bold h-12 uppercase'>
            4K
          </label>
          <span className=''>4K Ultra HD</span>
        </div>
        <div className='flex flex-col gap-2 mb-12 justify-between max-h-[72px]'>
          <img
            src='/assets/touch-id.svg'
            className='h-10 w-10 md:h-12 md:w-12 '
            alt='touch-icon'
          ></img>
          <span className=''>TouchID</span>
        </div>
        <div className='flex flex-col '>
          <label className='text-2xl md:text-4xl sm:text-3xl font-bold h-12 uppercase'>
            8K HDR
          </label>
          <span className=''>High Dynamic Range</span>
        </div>
        <div className='flex flex-col  justify-between max-h-[72px]'>
          <img
            src='/assets/ray.svg'
            className='h-10 w-10 sm:h-12 sm:w-12'
            alt='ray-icon'
          ></img>
          <span className=''>Ray tracing</span>
        </div>
        <div className='flex flex-col mb-12'>
          <label className='text-2xl md:text-4xl sm:text-3xl font-bold h-12 uppercase'>
            Up to 120
          </label>
          <span className=''>Frames per second</span>
        </div>
      </div>
      <p className='p-8 text-sm'>
        Disclaimer: We aim to build a high performance gaming console. The
        features above are not confirmed until we have a functional prototype.
      </p>
      {/* multi chain consle */}
      <div
        className='flex flex-col p-2 gap-8 items-center py-10 text-black mb-4'
        style={{ background: '#9558c447 ' }}
      >
        <label className='text-4xl  font-bold'>
          {' '}
          It's a Multi-chain console
        </label>
        <p className='text-sm'>
          Discover & Play Ethereumn, Solana and Polygon games without needing to
          switch chain
        </p>
        <div className='flex justify-center gap-6 sm:gap-12'>
          <LazyLoadImage
            className='h-14 sm:h-28'
            src='/assets/ethereum-(eth).png'
          ></LazyLoadImage>
          <LazyLoadImage
            className='h-14 sm:h-28'
            src='/assets/solana-(sol).png'
          ></LazyLoadImage>
          <LazyLoadImage
            className='h-14 sm:h-28'
            src='/assets/polygon-(matic).png'
          ></LazyLoadImage>
        </div>
        <span className='text-sm'>and many more</span>
      </div>
      {/* <div
        className='flex p-2 flex-col gap-8 items-center py-10 text-black mb-4'
        style={{ background: '#3EB78440' }}
      >
        <label className='text-4xl  font-bold'> Dashboard</label>
        <p className='text-sm'>
          A clean dashboard so that you can enjoy Web 3 more effeciently.
        </p>
      </div> */}
      {/* console features */}
      {/* <ConsoleFeature /> */}
      {/* -------- */}
      {/* <div
        className='flex p-2 flex-col gap-8 items-center py-10 text-black mb-4'
        style={{ background: '#3e60b740' }}
      >
        <label className='text-4xl  font-bold'> Dual3 Controller</label>
        <p className='text-sm'>A controller that is built for Web 3 gaming.</p>
      </div> */}
      {/* ControllerFeature */}
      <ControllerFeature />
      {/* -------- */}
      {/* Multilingual console*/}
      <div
        className='flex p-2 flex-col gap-8 items-center py-10 text-black mb-4'
        style={{ background: '#F33C3C40' }}
      >
        <label className='text-4xl  font-bold'>
          {' '}
          It's a Multilingual console
        </label>
        <p className='text-sm'>
          Pay games that are built from many different technologies.
        </p>
        <div className='flex justify-center gap-2 sm:gap-4 flex-wrap'>
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
        className='flex p-2 flex-col gap-8 items-center py-10 text-black mb-4'
        style={{ background: '#3e60b740' }}
      >
        <h2 className='text-4xl  font-bold'>Estimated Launch Date: 2024</h2>
        <p className='text-sm mb-8'>
          We are building it. It will be worth the wait. It’s the future of
          gaming
        </p>
        <div className='flex justify-center gap-6 mb-12 flex-col sm:flex-row'>
          <button className='btn btn-outline px-12 btn-sm'>Pre-oder</button>
          <button className='btn btn-outline px-12 btn-sm'>Whitepaper</button>
          <button className='btn btn-outline px-12 btn-sm'>Discord</button>
        </div>
      </div>
    </div>
  );
}
