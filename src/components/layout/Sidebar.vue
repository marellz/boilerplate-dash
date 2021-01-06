<template>
  <div class="sidebar" :class="{ active }">
    

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-content>
        <div class="sidebar--logo text-center py-5">
          <img src="@/assets/logo.png" height="100px" alt="" />
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-content>
        <nav class="nav sidebar--nav flex-column">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.path"
            class="nav-link"
            >{{ link.text }}</router-link
          >
        </nav>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line class="mt-auto">
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="text-white">Jane Smith</v-list-item-title>
        <v-list-item-subtitle class="text-magnolia"
          >Logged In</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props: {
    hasAuth: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { text: "Home", path: { name: "home" } },
        { text: "About", path: { name: "about" } },
      ],
    };
  },
};
</script>
