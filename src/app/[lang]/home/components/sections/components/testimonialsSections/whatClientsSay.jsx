import React from 'react';
import Image from 'next/image';
import User1 from '@/images/home-page/user_1.png';
import User2 from '@/images/home-page/user_2.png';
import User3 from '@/images/home-page/user_3.png';

const usersInfo = [
  {
    userImage: User1,
    userName: 'John Smith',
    userInfo: 'Facility Manager, GreenTech Solutions',
    userComment:
      "“The Falsch-Parker app has revolutionized our parking space management. It's user-friendly and incredibly efficient. Since we started using it, illegal parking issues have dropped significantly.”",
  },
  {
    userImage: User2,
    userName: 'Emily Johnson',
    userInfo: 'Head of Operations, Urban Real Estate',
    userComment:
      '“Implementing this app in our residential complexes has been a game changer. The ease of reporting and processing claims has made parking enforcement much simpler and more effective.”',
  },
  {
    userImage: User3,
    userName: 'Mark Lee',
    userInfo: 'Security Supervisor, Downtown Mall',
    userComment:
      "“The Falsch-Parker app has revolutionized our parking space management. It's user-friendly and incredibly efficient. Since we started using it, illegal parking issues have dropped significantly.”",
  },
];

export const CustomerReview = ({
  userImage,
  userName,
  userInfo,
  userComment,
}) => {
  return (
    <div className='w-full'>
      <span className='text-5xl'>{userComment}</span>
      <div className='mt-10 flex h-[50px] items-center text-dark'>
        <Image src={userImage} className='h-[44px] w-[44px]' alt='user' />
        <div className='flex flex-col justify-center pl-4'>
          <span className='text-xl'>{userName}</span>
          <span className='text-base text-dark/50'>{userInfo}</span>
        </div>
      </div>
    </div>
  );
};

export const WhatClientsSay = () => {
  return (
    <div className='flex w-full rounded-card bg-white p-20'>
      <div className='w-1/3'>
        <span className='text-2xl'>
          Here's what <br />
          our clients say.
        </span>
      </div>
      <div className='flex w-2/3 flex-col gap-20'>
        {usersInfo.map((item, index) => (
          <CustomerReview
            key={index}
            userImage={item.userImage}
            userName={item.userName}
            userInfo={item.userInfo}
            userComment={item.userComment}
          />
        ))}
      </div>
    </div>
  );
};
