<template>
  <UButton
    :label="label"
    :icon="icon"
    variant="ghost"
    color="primary"
    :class="[
      'rounded-none py-3.5 pl-5 pr-2.5 gap-3.5 pointer text-stone-400',
      isActive 
      ? 'is-active bg-gray-100 hover:bg-gray-100' 
      : 'hover:bg-stone-50 hover:text-stone-600'
    ]"
    :style="isActive 
      ? 'color: var(--color-main-blue); border-left: 5px solid var(--color-main-blue);' 
      : 'border-left: 5px solid var(--color-stone-50);'"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
  const props = defineProps<{
    label?: string
    icon?: string
    isActive?: boolean
  }>()
</script>

<style scoped>
</style>