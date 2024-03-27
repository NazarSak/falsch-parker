'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerNavigation } from '@/utils/navigations';
import logo from '@/images/home-page/logo.png';
import { Container } from '@/components/container/container';
import { PayFineButton } from '@/components/buttons/payFineButton';
import { usePathname } from 'next/navigation';
import cl from 'classnames';
import { useClientTranslation } from '@/app/i18n/client';

const Header = ({ lang }) => {
  const { t } = useClientTranslation(lang, 'header');
  const pathname = usePathname();
  return (
    <header
      className={`fixed top-0 z-[1000] flex h-[75px] w-full bg-[#F5F7F9]/80  backdrop-blur-xl duration-300`}>
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
          <div className='flex w-full items-center justify-center max-[950px]:hidden'>
            <ul className='flex w-full max-w-[650px] justify-between'>
              {headerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className={cl(
                      'p-2 text-base font-light text-[#0D0F11] duration-200 hover:text-[#28282880]',
                      pathname === `/${lang}${item.href}`
                        ? 'drop-shadow-[0_0.5px_0_#000]'
                        : ''
                    )}>
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
