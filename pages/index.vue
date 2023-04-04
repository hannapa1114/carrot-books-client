<template>
  <div class="mx-auto w-1/2 h-screen">
    <h1 class="text-bold text-lg pt-8">Main Page</h1>
    <div
      class="border-dotted border-2 border-sky-200 w-20 h-10 mx-auto flex justify-center items-center"
    >
      <NuxtLink to="/test">to Test</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'bar',
})
</script>
