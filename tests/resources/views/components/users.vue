<template lang="html">
  <div class="">
      <ul>
          <li v-for="user in users">
              <a v-bind:href="`/users/${user.name}`"class="test">{{ user.name }}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ["title", "users"]
};
</script>

<style lang="css">
.test {
  color: pink;
  font-size: 20px;
}
</style>
