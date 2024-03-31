'use client';
import React, { useState } from 'react';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { Container } from '@/components/container/container';
import { Cross } from '@/components/icons/cross';
import { Dash } from '@/components/icons/dash';

const AccordionItem = ({ item, isActive, onSetActive }) => {
  return (
    <div
      className='cursor-pointer border-b border-dark/20 text-3xl'
      onClick={onSetActive}>
      <div className='w-full pb-6 text-left focus:outline-none'>
        <div className='flex items-center'>
          <div className='relative flex items-center justify-center p-6'>
            <div className='absolute'>
              <Dash
                className={`${
                  isActive ? 'opacity-100' : 'opacity-0'
                } transform text-[20px] text-dark transition-opacity duration-500 ease-in-out`}
              />
            </div>
            <div className='absolute'>
              <Cross
                className={`${
                  isActive ? 'opacity-0' : 'opacity-100'
                } transform text-[20px] text-dark transition-opacity duration-500 ease-in-out`}
              />
            </div>
          </div>
          {item.title}
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-500 ease-in-out ${isActive ? 'max-h-40' : 'max-h-0'}`}>
        <div className='pb-6 pl-[88px] text-dark/50'>{item.content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleSetActive = (index) => {
    setActiveIndexes((currentActiveIndexes) => {
      if (currentActiveIndexes.includes(index)) {
        return currentActiveIndexes.filter((i) => i !== index);
      } else {
        return [...currentActiveIndexes, index];
      }
    });
  };

  return (
    <div className='flex flex-col gap-[68px]'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isActive={activeIndexes.includes(index)}
          onSetActive={() => handleSetActive(index)}
        />
      ))}
    </div>
  );
};

export const FaqSection = () => {
  const accordionItems = [
    {
      title:
        'Is the use of the service completely free of charge, and are there any additional costs for users?',
      content:
        'Absolutely, the use of our service is completely free for all users, and there are no additional fees.',
    },
    {
      title: 'Who is liable in case of disputes?',
      content:
        'We at Falsch-parker.ch take full responsibility and handle all administrative tasks.',
    },
    {
      title:
        'As a property owner or manager, do I need a judicial prohibition to have a vehicle towed?',
      content:
        'No, to have illegally parked vehicles towed, neither a judicial prohibition nor signage is required!',
    },
    {
      title:
        "Can I have a car towed if it's parked illegally on my private parking space?",
      content:
        'Yes, as long as you provide us with your lease agreement proving that you rent the parking space, and sign the necessary assignment (cession) allowing us to claim the incurred costs from the person who parked illegally.',
    },
  ];

  return (
    <Container>
      <div className='h-full'>
        <div className='mb-9 flex  justify-between'>
          <SectionTitle title='Testimonials' />
          {/*<ContactUs />*/}
        </div>
        <h5 className='mb-20 text-9xl'>
          You asked, <br />
          we answer.
        </h5>

        <div className='w-full'>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </Container>
  );
};
