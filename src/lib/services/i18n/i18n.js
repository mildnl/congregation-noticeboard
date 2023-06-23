import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('../../../locales/en.json'));
register('de', () => import('../../../locales/de.json'));

init({
    fallbackLocale: 'de',
    initialLocale: getLocaleFromNavigator(),
  })

async function setupI18n(defaultLocale) {
  let language = defaultLocale == null ? 'de' : defaultLocale;
  init({
    fallbackLocale: language,
    initialLocale: getLocaleFromNavigator(),
  })
}

export default setupI18n;