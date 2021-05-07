<template>
  <v-container>
      <v-row>
          <v-col class="heading">
            <h2>История изменений</h2>
          </v-col>
      </v-row>
        <!-- <v-data-table
        :headers="historyTableHeaders"
        :items="contractHistory"
        item-key="date"
        :loading="isLoad"
        show-expand
        single-expand > -->
      <v-row>
        
      </v-row>     
  </v-container>
</template>

<script>

export default {
  name: 'AllContractsHistory',
  components: {
  },
  data(){
    return{
        allContractsHistory: [],
        isLoad: true,
        isErr: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.heading{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

h2{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
}


</style>
