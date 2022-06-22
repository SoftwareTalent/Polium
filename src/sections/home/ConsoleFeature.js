import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Icon } from '@iconify/react';

const CONSOLE_FEAUTURES_ITEMS = [
  {
    image: '',
    text: 'Multi-chain wallet for trading, swapping and bridging.',
    icon: 'clarity:wallet-line',
  },
  {
    image: '',
    text: 'Download games, metaverses and apps.',
    icon: 'clarity:shopping-bag-line',
  },
  {
    image: '',
    text: 'Buy & Trade NFTs and In-Game Items.',
    icon: 'iconoir:small-shop-alt',
  },
  {
    image: '',
    text: 'Check leaderboards, transactions and game activity.',
    icon: 'bx:bar-chart-alt-2',
  },
  {
    image: '',
    text: 'Stay connected with your friends with messaging and voice chat.',
    icon: 'bx:comment-detail',
  },
];

const CONSOLE_FEAUTURES_IMAGES = [
  { image: '/assets/home-swiper(1).jpg', index: 1 },
  { image: '/assets/home-swiper(2).jpg', index: 2 },
  { image: '/assets/home-swiper(3).jpg', index: 3 },
  { image: '/assets/home-swiper(4).jpg', index: 4 },
];

const settingSwiper = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  modules: [Autoplay, Pagination, Navigation],
};
export default function ConsoleFeature() {
  return (
    <div className='flex flex-col justify-between md:flex-row w-full  mb-[87px] mt-[33px]'>
      <div className='w-full md:w-3/5'>
        <Swiper {...settingSwiper} className='testimonial'>
          {CONSOLE_FEAUTURES_IMAGES.map((item, index) => (
            <SwiperSlide
              key={index}
              className='mb-8 border border-base-300 rounded-md p-2'
            >
              <LazyLoadImage
                src={item.image}
                effect='blur'
                alt=''
              ></LazyLoadImage>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex flex-col'>
        <label className='text-[20px] font-bold mb-[44px]'>
          Console Featrues
        </label>
        {CONSOLE_FEAUTURES_ITEMS.map((item, index) => (
          <div className='flex items-center mb-[28px]' key={index}>
            <div className='h-12 min-w-[48px] mr-[25px] w-12 rounded-full border border-base-300 flex justify-center items-center'>
              <Icon icon={item.icon} width={24}></Icon>
            </div>
            {/* <img src={item.image} alt='' className='h-12 w-12' /> */}
            <p className={`text-[16px] break-all`}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
