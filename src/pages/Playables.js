import { useEffect, useState } from 'react';
import Collapse from '../components/Collaspse';

export default function Playables() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setFaqs([
      {
        title: 'Is the console available?',
        content: "Yes, available, if you're a correct user, it is possible",
      },
      {
        title: 'Is the console available?',
        content: "Yes, available, if you're a correct user, it is possible",
      },
      {
        title: 'Is the console available?',
        content: "Yes, available, if you're a correct user, it is possible",
      },
    ]);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center gap-4 sm:gap-8 p-2 sm:p-4 md:p-8 '>
      {/* pass */}
      <h2 className='text-[40px] font-bold font-khula'>Playables</h2>
      <p className='font-khula text-[20px]'>
        The NFT for accessing the Polium Ecosystem.
      </p>
      <span className='font-khula text-[16px] text-[#6B6B6B]'>
        Mint is coming soon!
      </span>
      <div className='w-full max-w-3xl border border-base-300 mb-10 sm:mb-16'>
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
      </div>
      {/* utils */}
      <h2 className='text-[36px] font-bold font-khula mb-[27px]'>Utilities </h2>
      <p className='text-[20px] font-khula mb-[63px]'>Holders will receive</p>

      <div className='w-full max-w-3xl justify-between mb-10 sm:mb-16 flex gap-2 sm:gap-4 md:gap-8 flex-col sm:flex-row'>
        <div className='flex flex-col items-center  '>
          <div className='flex h-12 w-12 flex-col mb-[27px]'>
            <img src='/assets/mobile.svg' className='width:100%' />
          </div>
          <span className='text-[20px] font-khula'>Polium One Console</span>
        </div>
        <div className='flex flex-col  items-center  '>
          <div className='flex h-12 w-12 flex-col mb-[27px]'>
            <img src='/assets/ticket-star.svg' className='width:100%' />
          </div>
          <span className='text-[20px] font-khula'>5000 PLAY</span>
        </div>
        <div className='flex flex-col  items-center  '>
          <div className='flex h-12 w-12 flex-col mb-[27px]'>
            <img src='/assets/archive.svg' className='width:100%' />
          </div>
          <span className='text-[20px] font-khula'>Future Airdrops</span>
        </div>
      </div>
      {/* ticket */}
      <h2 className='text-[36px] font-khula font-bold mb-[29px]'>
        Polium PLAY{' '}
      </h2>
      <p className='font-khula text-[20px] mb-[273px]'>
        You will be rewarded PLAY for being a holder. The PLAY could be
        meaningful in the future
      </p>

      <h2 className='text-[36px] font-khula font-bold mb-[29px]'>
        Automatic Staking{' '}
      </h2>
      <p className='font-khula text-[20px] mb-[52px] '>
        You will automatically earn daily tickets by holding the Polium Pass
      </p>
      {/* staking */}

      <div className='flex rounded-xl w-[280px] h-60 bg-gradient-to-b from-fuchsia-400 to-blue-300 items-center justify-center gap-4 mb-14'>
        <div className='rounded-full h-40 w-40 py-10 flex flex-col items-center gap-3 border-gray-600 border-4'>
          {/* <div className='w-10'>
            <img src='/assets/ticket-star.svg' className='width:100%' />
          </div> */}
          <h3 className='text-xs tracking-tight'>Next Amount: 100 Tickets</h3>
        </div>
      </div>
      {/* ticket */}
      <h2 className='text-[36px] font-khula font-bold mt-[227px] mb-[29px]'>
        FAQ
      </h2>
      <p className='font-khula text-[20px] mb-[102px]'>
        Frequently asked questions regarding the Polium Pass
      </p>
      <div className='w-full md:w-3/4 mb-[414px]'>
        <Collapse items={faqs}></Collapse>
      </div>
    </div>
  );
}
