<template>
  <div class="fixed h-16 w-full from-blue to-light-blue bg-gradient-to-b flex items-center shadow-black">
      <nav class="flex flex-row w-full justify-between mx-20">
          <div>
              <img src="../../public/logo.svg" alt="logo" class="h-10">
          </div>
          <div>

              <h1 class=" text-2xl font-bold text-white">Pomodoro Manager</h1>
          </div>
          <div class="w-1/2">
              <ul class="flex flex-row justify-end gap-x-5 items-center">
                  <li>
                      <NavButton :text="t('Home')"/>
                  </li>
                  <li>
                      <NavButton :text="t('About')"/>
                  </li>
                  <li>
                      <Switcher/>
                  </li>
                  <li>
                      <img alt="githubLogo">
                  </li>
              </ul>
          </div>
      </nav>
  </div>
</template>
<script setup lang="ts">

import { useI18n } from "vue-i18n";
import NavButton from "@/components/buttons/NavButton.vue";
import Switcher from "@/components/lang/Switcher.vue";

const { t } = useI18n();
</script>