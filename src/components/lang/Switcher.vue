<template>
  <select v-model="locale" class="rounded bg-black text-white" @change="changeLocale">
      <option
              v-for="locale of availableLocales"
              :value="locale"
              :key="locale"
      >
          {{ t(locale) }}
      </option>
  </select>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useCookie } from "@/composables/cookies";
import { Cookie } from "@constants/cookie.constants";

const { t, availableLocales, locale} = useI18n();
const { set } = useCookie();
const changeLocale = (e: Event) => {
  set(Cookie.Lang, e.target.value)
}
</script>