<template>
  <div class="about">
    <h1>This is about page</h1>
    <div>
      <code>window.mock=</code>
      <input type="text" v-model="mock">
      <button @click="setValue" :disabled="disabled">set</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mock: window.mock,
      windowMock: window.mock
    }
  },
  methods: {
    setValue() {
      window.mock = this.mock;
      this.windowMock = this.mock;
    }
  },
  computed: {
    disabled() {
      return this.mock === this.windowMock;
    }
  }
}
</script>

<style scoped>
  .about {
    color: #7265e6;
  }
</style>
