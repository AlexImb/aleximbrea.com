<template>
  <main class="flex flex-col justify-center h-screen bg-yeezy">
    <Hero />
  </main>
</template>

<script>
import Hero from '@/components/Hero';
export default {
  name: 'App',
  components: { Hero },
};
</script>

<style lang="postcss">
@import './index.pcss';
</style>
