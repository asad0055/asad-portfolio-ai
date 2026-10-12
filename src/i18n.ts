import { createI18n } from 'vue-i18n'
import en from './locales/en'
import no from './locales/no'

const savedLanguage = localStorage.getItem('portfolio-language')

export const i18n = createI18n({
  legacy: false,
  locale: savedLanguage === 'no' ? 'no' : 'en',
  fallbackLocale: 'en',
  messages: { en, no },
})