<template>
  <v-container>
      <v-row>
      <v-spacer />
      <v-col cols="8">
        <v-data-table
      :headers="historyTableHeaders"
      :items="contractHistory"
      item-key="date"
      :loading="isLoad"
      show-expand
      single-expand >

        <template 
        v-slot:expanded-item="{ headers, item }">
            <td class="inside" 
            :colspan="headers.length">
                <ContractChanges
                :actions="item.actions"
                />
            </td>
        </template>

      </v-data-table>

      </v-col>
      <v-spacer />
      </v-row>
     
  </v-container>
</template>

<script>
import Axios from "axios";
import { GET_CONTRACT_LOGS } from "@/api";
import ContractChanges from './ContractChanges.vue';

export default {
  name: 'ContractHistory',
  components: {
    ContractChanges
  },
  data(){
    return{
        contractHistory: [],
        isLoad: true,
        isErr: false,
    }
  },
  methods:{
      async getContractLogs() {
      try {
        const { data: contractHistory } = await Axios.get(GET_CONTRACT_LOGS);
        this.contractHistory = contractHistory;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
  },
  computed:{
      historyTableHeaders(){
        return[
            {
                text: "Дата",
                value: "date",
                align: "center",
            },
            {
                text: "Время",
                value: "time",
                align: "center",
            },
            {
                text: "Действие",
                value: "actions",
                align: "center",
            },
            {
                text: "Пользователь",
                value: "userFIO",
                align: "center",
            },
        ]
      }
    },
    created(){
        this.getContractLogs();
    }
}
</script>

<style lang="scss" scoped>
.inside{
    padding: 0;
}


</style>
