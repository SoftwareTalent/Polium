import { Icon } from '@iconify/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';

const CONTROLLER_FEAUTURES_ITEMS = [
  {
    image: '',
    text: 'TouchID for added layer of security.',
    icon: 'fluent:fingerprint-20-regular',
  },
  {
    image: '',
    text: 'Wallet button to quickly access your wallet while in a game.',
    icon: 'clarity:wallet-line',
  },
  { image: '', text: 'Haptic Triggers.', icon: 'ic:outline-waves' },
  {
    image: '',
    text: 'Headphone jack to voice chat.',
    icon: 'fluent:headphones-28-regular',
  },
  { image: '', text: 'Sensitive touchpad.', icon: 'gg:touchpad' },
];

export default function ControllerFeature() {
  return (
    <div className='flex flex-col md:flex-row gap-4 w-full  mb-[136px]'>
      <div className='flex flex-col gap-8 md:w-2/5'>
        <label className='text-[20px] font-bold'>Controller Featrues</label>
        {CONTROLLER_FEAUTURES_ITEMS.map((item, index) => (
          <div className='flex gap-2 items-center' key={index}>
            <div className='h-12 min-w-[48px] w-12 rounded-full border border-base-300 flex justify-center items-center'>
              <Icon icon={item.icon} width={24}></Icon>
            </div>
            {/* <img src={item.image} alt='' className='h-12 w-12' /> */}
            <p className={`text-[16px]`}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='w-full border border-base-300'>
        <video
          className='w-full border'
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
    </div>
  );
}
