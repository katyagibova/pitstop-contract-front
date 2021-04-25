<template>
  <div class="home">
    <v-col>
      <v-row>
        <v-col cols="1">
          <router-link to="/search" class="link">
            <v-btn
            class="btn"
            color="#5374FF"> Поиск </v-btn>
          </router-link>
        </v-col>
        <v-col cols="1">
          <router-link to="/archive" class="link">
            <v-btn
            class="btn"
            color="#5374FF">Архив</v-btn>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
          <router-link to="/history" class="link">
            <v-btn
            class="btn"
            color="#5374FF">История</v-btn>
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

.btn{
  color: #fff;
}
</style>
