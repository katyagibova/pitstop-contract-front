<template>
  <div class="home">
    <v-col>
      <v-row>
        <v-col cols="1">
          <router-link to="/search" class="link">
            <v-btn> Поиск </v-btn>
          </router-link>
        </v-col>
        <v-col cols="1">
          <router-link to="/archive" class="link">
            <v-btn>Архив</v-btn>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
          <router-link to="/history" class="link">
            <v-btn>История</v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <router-view >
          </router-view>
        </v-col>
        
      </v-row>
    </v-col>
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.link{
  text-decoration: none;
}
</style>
