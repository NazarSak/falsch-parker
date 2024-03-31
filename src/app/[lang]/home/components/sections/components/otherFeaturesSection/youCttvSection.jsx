import React, { useState } from 'react';
import Image from 'next/image';
import CTTV from '@/images/home-page/cttv.png';
import OurService from '@/images/home-page/ourService.png';
import { ArrowLeftShapeButton } from '@/components/buttons/shapeButtons/arrowLeftShapeButton';
import { CrossShapeButton } from '@/components/buttons/shapeButtons/crossShapeButton';

export const YouCttvSection = () => {
  const [isTwoScreen, setIsTwoScree] = useState(false);
  return (
    <div className='relative h-[697px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card bg-dark'>
      {isTwoScreen ? (
        <div className='relative flex h-full'>
          <div className='relative h-full w-[50%]'>
            <Image
              src={OurService}
              alt='Our service'
              className='mt-[120px] object-contain'
              fill
            />
          </div>
          <div className='flex h-full w-[50%] flex-col justify-center pr-[100px] text-2xl text-white'>
            <span className='pb-6 text-white/50'>Automated parking fines</span>
            <span>
              Beginning January 2024, we will introduce a groundbreaking feature
              in our parking app: integrating closed-circuit television (CCTV)
              with AI support. This upgrade allows for effortless monitoring of
              parking spaces and visitors, removing the need for physical
              inspections. <br />
              Our advanced AI efficiently identifies authorized parking and
              autonomously issues tickets for unauthorized vehicles after a
              specified time. This innovative solution streamlines parking
              surveillance, enhances efficiency, and ensures orderly parking
              space usage without manual intervention.
            </span>
          </div>
        </div>
      ) : (
        <div className='relative h-full w-full'>
          <div className='absolute bottom-[100px] left-[100px] z-[1] flex flex-col '>
            <span className='gradient-text bg-gradient-to-r from-white/50 to-white bg-clip-text text-8xl text-transparent'>
              Your CCTV & <br /> our AI automation.
            </span>
            <span className='gradient-text bg-gradient-to-r from-white/30 to-white/70 bg-clip-text pt-10 text-4xl text-transparent '>
              Connect your CCTV infrastructure to our app.
            </span>
          </div>
          <Image src={CTTV} alt='cttv' className='object-cover ' fill />
        </div>
      )}

      {isTwoScreen ? (
        <div className='absolute bottom-0 right-0 z-[3]'>
          <ArrowLeftShapeButton
            className='bg-dark'
            onClick={() => setIsTwoScree(!isTwoScreen)}
          />
        </div>
      ) : (
        <CrossShapeButton
          className='bg-dark'
          onClick={() => setIsTwoScree(!isTwoScreen)}
        />
      )}
    </div>
  );
};
