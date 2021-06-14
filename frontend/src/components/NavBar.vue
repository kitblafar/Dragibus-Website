<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="nav-item"><router-link to="/" class="nav-link" style="color: white">Dragibus Review</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-item"><router-link to="/test" class="nav-link">Test</router-link></b-nav-item>
          <b-nav-item class="nav-item"><router-link to="/results" class="nav-link">Results</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>