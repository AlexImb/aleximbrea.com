<template>
  <div class="flex flex-col items-center">
    <img alt="AI Logo" src="@/assets/logo.svg" class="w-48" />
    <div class="mt-4 font-mono text-5xl text-white">Alex Imbrea</div>
    <div class="flex justify-center w-full mt-10 text-3xl text-white">
      <a
        v-for="item in socialItems"
        :key="item.icon"
        :href="item.link"
        target="_blank"
        rel="noreferrer"
      >
        <Icon :icon="[item.iconFamily, item.icon]" class="mx-4" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialItems: [
        { link: 'https://www.linkedin.com/in/alex-imbrea', iconFamily: 'fab', icon: 'linkedin' },
        { link: 'https://github.com/AlexImb', iconFamily: 'fab', icon: 'github' },
        { link: 'https://www.producthunt.com/@aleximb', iconFamily: 'fab', icon: 'product-hunt' },
        { link: 'https://twitter.com/aleximb', iconFamily: 'fab', icon: 'twitter' },
        { link: 'https://www.facebook.com/username.no13', iconFamily: 'fab', icon: 'facebook' },
        { link: 'https://calendly.com/aleximbrea', iconFamily: 'fa', icon: 'calendar-day' },
      ],
    };
  },
};
</script>
