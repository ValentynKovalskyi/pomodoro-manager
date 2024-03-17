<template>
  <button class="px-3 py-1 text-white font-semibold hover:text-purple transition-colors">
      {{ text }}
  </button>
</template>

<script setup lang="ts">

interface Props {
  text: string,
}

defineProps<Props>()
</script>