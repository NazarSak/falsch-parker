import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerNavigation } from '@/utils/navigations';
import logo from '@/images/logo.png';
import { useServerTranslation } from '@/app/i18n';
import { Container } from '@/components/container/container';
import PayFineButton from '@/components/buttons/payFineButton';

const Header = async ({ lang }) => {
  const { t } = await useServerTranslation(lang, 'routes');
  return (
    <header
      className={`flex top-0 w-full h-[75px] fixed bg-[#ffff]/80 backdrop-blur-xl  duration-300 z-[1000]`}>
      <Container>
        <div className='flex'>
          <div className='flex items-center'>
            <Image
              src={logo}
              width={100}
              height={40}
              alt='Falsch-parker logo'
            />
          </div>
          <div className='w-full flex items-center justify-center'>
            <ul className='w-full max-w-[650px] flex justify-between'>
              {headerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className='hover:text-[#28282880] text-base text-[#0D0F11] p-2 duration-200'>
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <PayFineButton text='Pay fine' />
        </div>
      </Container>
    </header>
  );
};

export default Header;
