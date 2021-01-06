<template>
  <dash>
    <div class="home">
      <div class="jumbotron jumbotron-fluid bg-transparent">
        <div class="container">
          <h1 class="display-4">Welcome {{ name }}</h1>
          <p class="lead">This is your overview/main page.</p>
          <hr class="my-2" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            eaque corporis vel. Aspernatur, corporis! Eaque nihil repellendus
            aut laudantium. Molestias tempore nam nesciunt quia omnis id
            consequatur sint nulla natus.
          </p>
          <p class="lead">
            <button
              class="btn btn-primary btn-lg"
              role="button"
              >Do something</button
            >
          </p>
        </div>
      </div>
    </div>
  </dash>
</template>

<script>
import Dash from "@/components/wrappers/Dash";
export default {
  name: "Home",
  components: {
    Dash,
  },
  data() {
    return {
      name: "{{ name }}"
    }
  },
};
</script>
