import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json'
import ua from '@/locales/ua.json'
import { Locale } from "@constants/locale.constants";
import {useCookie} from "@/composables/cookies";
import {Cookie} from "@/utils/constants/cookie.constants";
import VueCookies from "vue-cookies";

let locale = VueCookies.get(Cookie.Lang);

if(!locale) {
  VueCookies.set(Cookie.Lang, Locale.EN);
  locale = Locale.EN;
}

export default createI18n({
  legacy: false,
  locale,
  messages: {
    en,
    ua
  }
})