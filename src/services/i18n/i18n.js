import { register, init, getLocaleFromPathname } from 'svelte-i18n';

register('en', () => import('../../../static/locales/en.json'));
register('de', () => import('../../../static/locales/de.json'));

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