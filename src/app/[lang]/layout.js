import local from 'next/font/local';
import '../globals.scss';
import Header from '@/components/header/header';
import { locales } from '@/app/i18n/settings';

const cygre = local({
  src: [
    {
      path: '../../../public/fonts/Cygre-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Falsch-parker',
  description: 'Generated by create next app',
};

export const generateStaticParams = () => {
  return locales.map((locale) => ({ lang: locale }));
};

const RootLayout = ({ children, params: { lang } }) => {
  return (
    <html lang={lang}>
      <body className={cygre.className}>
        <Header lang={lang} />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;