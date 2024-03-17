<template>
  <select v-model="locale" class="rounded bg-black text-white" @change="">
      <option v-for="localeOption of availableLocales">
          {{ t(localeOption) }}
      </option>
  </select>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";

const { t, availableLocales, locale} = useI18n();

</script>