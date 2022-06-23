import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Collapse from '../../components/Collaspse';

export default function FaqList() {
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
    <div className='mb-[228px]'>
      <div
        className='flex flex-col  items-center  text-black pt-[33px] pb-[45px] mb-[61px] text-[36px] font-bold'
        style={{ background: '#3EB78440' }}
      >
        F A Q
      </div>
      <Collapse items={faqs}></Collapse>
    </div>
  );
}
