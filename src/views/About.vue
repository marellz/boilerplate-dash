<template>
  <dash>
    <div class="about">
      <router-view/>
    </div>
  </dash>
</template>
<script>
import Dash from "@/components/wrappers/Dash";
export default {
  name: "About",
  components: {
    Dash,
  },
};
</script>
