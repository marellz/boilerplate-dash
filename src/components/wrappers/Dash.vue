<template>
  <div class="wrapper wrapper--dash">
    <Sidebar :active="navbarActive" :has-auth="isAuthenticated"/>
    <div class="wrapper--content">
      <Header @toggle-navbar="toggleNavbar" :has-auth="isAuthenticated"/>
      <main>
        <slot />
      </main>
      <Footer :has-auth="isAuthenticated"/>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
  name: "DashWrap",
  props: {},
  components: {
    Sidebar,
    Header,
    Footer,
  },
  data() {
    return {
        isAuthenticated: true,
        navbarActive: false,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    toggleNavbar(){
      this.navbarActive = !this.navbarActive
    }
  },
};
</script>
