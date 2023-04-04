<template>
  <div class="mx-auto w-1/2 h-screen">
    <h1 class="text-bold text-lg pt-8">Test Page</h1>
    <div
      class="border-dotted border-2 border-sky-200 w-40 h-10 mx-auto flex justify-center items-center"
    >
      <NuxtLink to="/">Back to Main</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TestPage',
  layout: 'bar',
})
</script>
