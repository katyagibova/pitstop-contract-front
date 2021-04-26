<template>
  <v-app>
    <v-app-bar 
    app
    color="#9E9E9E"
    style="color:#fff;"
    flat
    >
      <div class="d-flex align-center">
        <h1>PITSTOP</h1>
      </div>
      <v-spacer></v-spacer>


      <v-text-field
      placeholder="Поиск"
      clearable
      style="max-width:500px"
      dark
      class="mt-3"
      />
      <v-btn
      icon
      >
        <v-icon
        size="30"
        color="white"
        >mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
          <v-icon
          color="#fff">
            mdi-account-circle-outline
          </v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon
        size="30"
        color="white"
        >mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer
      v-model="drawer"
      permanent
      expand-on-hover
      absolute
      color="#9E9E9E"
      style="color:white"
      hide-overlay
      >
      <v-list nav dense
      >
          <v-list-item-group
          >
            <v-list-item
              v-for="(item, i) in menuItems"
              :key="i"
              exact
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon
                :color="item.color"
                >{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                style="color:white; font-weight:bald; font-size:16px"
                >{{ item.label }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div >
      <router-view
      style="margin-left:56px"
      >  
      </router-view>
    </div>
    

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      drawer: true,
      mini: true,
      menuItems: [
        {
          route: { name: "Home" },
          label: "Главная",
          icon: 'mdi-home',
          color: "#fff"
        },
        {
          route: { path: "/product" },
          label: "Товары",
          icon: 'mdi-shopping-outline',
          color: "#fff"
        },
        {
          route: { path: "/vendor" },
          label: "Поставщики",
          icon: 'mdi-truck-delivery',
          color: "#fff"
        },
        {
          route: { path: "/contract" },
          label: "Контракты",
          icon: 'mdi-file-document',
          color: "#fff"
        },
      ],
    };
  },
  watch: {
    $route() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.container{
  max-width: 1180px;
  margin: 0 auto;
}
  
</style>
