<template>
  <div class="jumbotron jumbotron-fluid bg-transparent">
    <div class="container">
      <h1 class="display-3">About</h1>
      <p class="lead">Info about this dashboard</p>
      <hr class="my-2" />
      <p class="lead">
        <router-link
          class="btn btn-primary btn-lg"
          :to="{ name: 'home' }"
          role="button"
          >Go Home</router-link
        >
        <router-link
          class="btn btn-primary btn-lg ml-3"
          :to="{ name: 'me' }"
          role="button"
          >Me</router-link
        >
      </p>
    </div>
  </div>
</template>
