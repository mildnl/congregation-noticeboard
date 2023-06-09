import { dictionary, locale, _, init, getLocaleFromPathname } from 'svelte-i18n';


 
init({
  fallbackLocale: 'de',
  initialLocale: getLocaleFromPathname(/^\/\w{2}\//),
})

const MESSAGE_FILE_URL_TEMPLATE = '/locales/{locale}.json';
let cachedLocale = 'de';

function setupI18n({ withLocale: _locale } = { withLocale: cachedLocale }) {
  const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', _locale);

  return {
    subscribe: locale.subscribe,
    async load() {
      const response = await fetch(messagesFileUrl);
      const messages = await response.json();

      dictionary.set({ [_locale]: messages });
      cachedLocale = _locale;
      locale.set(_locale);
    }
  };
}

export { _, locale, setupI18n };
