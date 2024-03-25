const defaultLocale = 'en';
const locales = [defaultLocale, 'de'];
const defaultNamespace = 'common';

const getOptions = (lang = defaultLocale, namespace = defaultNamespace) => {
  return {
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng: lang,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns: namespace,
  };
};

export { defaultLocale, locales, getOptions };
