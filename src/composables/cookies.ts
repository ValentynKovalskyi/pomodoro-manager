import {inject} from "vue";
import type { VueCookies } from "vue-cookies";

export const useCookie = () => {
 return  inject<VueCookies>('$cookies');
}