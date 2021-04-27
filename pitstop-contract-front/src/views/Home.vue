<template>
  <div class="home">
    <v-col>
      <v-row>
        <v-col cols="1">
            <v-btn
            class="btn"
            color="#5374FF"> Поиск </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn
            class="btn"
            color="#5374FF">Архив</v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
            <v-btn
            class="btn"
            color="#5374FF">История</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ContractTable />
        </v-col>
        
      </v-row>
    </v-col>
    
  </div>
</template>

<script>
import ContractTable from '../components/ContractTable/ContractTable.vue'

export default {
  name: 'Home',
  components: {
    ContractTable
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
