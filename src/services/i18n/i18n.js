import { register, init, getLocaleFromPathname } from 'svelte-i18n';

register('en', () => import('../../locales/en.json'));
register('de', () => import('../../locales/de.json'));

 let locale = getLocaleFromPathname(/^\/(.*?)\//) === null ? 'de' : getLocaleFromPathname(/^\/(.*?)\//);
init({
  fallbackLocale: locale,
  initialLocale: locale,
})

async function setupI18n(defaultLocale) {
  locale = getLocaleFromPathname(/^\/(.*?)\//) === null ? defaultLocale : getLocaleFromPathname(/^\/(.*?)\//);
  init({
    fallbackLocale: locale,
    initialLocale: locale,
  })
}

export default setupI18n;