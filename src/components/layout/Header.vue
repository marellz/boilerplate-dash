<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header--navbar navbar">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0">
            <li
              v-for="(link, index) in breadcrumbs"
              :key="index"
              class="breadcrumb-item"
              aria-current="page"
              :class="{ active: link.active }"
            >
              <template v-if="!link.active">
                <router-link :to="{ name: link.to }">{{
                  link.text
                }}</router-link>
              </template>
              <template v-else>
                {{ link.text }}
              </template>
            </li>
          </ol>
        </nav>
        <div class="header--right">
        <button class="btn btn-sm">
          <SettingsIcon size="15" />
        </button>
        <button class="btn btn-sm ml-2 d-lg-none" @click="$emit('toggle-navbar')">
          <MenuIcon size="15" />
        </button>

        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { SettingsIcon,MenuIcon } from "vue-feather-icons";
export default {
  name: "Header",
  components: {
    SettingsIcon,
    MenuIcon,
  },
  props: {
    hasAuth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      breadcrumbsBeta:[],
      breadcrumbs: [],
    };
  },
  watch: {
    $route(){
      this.updateLinks()
    }
  },
  methods: {
    updateLinks() {
      var extraCrumbs = this.$route.meta.breadcrumbs;
      var initialCrumb = [
        {
          text: "Home",
          to: "home",
          active: extraCrumbs && extraCrumbs.length === 0,
        },
      ];

      extraCrumbs.forEach(link => {
        if(!link.to) link.active = true
      });
      this.breadcrumbs =  [...initialCrumb, ...extraCrumbs];

    },
  },
  mounted() {
    this.updateLinks();
  },
};
</script>
