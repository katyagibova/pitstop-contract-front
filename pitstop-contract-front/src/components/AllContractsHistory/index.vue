<template>
  <v-container>
      <v-row>
          <v-col class="heading">
            <h2>История изменений</h2>
          </v-col>
      </v-row>
        <v-data-table
        :headers="historyTableHeaders"
        :items="allContractsHistory"
        item-key="date"
        :loading="isLoad"
        show-expand
        single-expand>
          <template 
          v-slot:expanded-item="{ headers, item }">
            <td class="inside" 
            :colspan="headers.length">
              <AllContractsHistoryChanges
              :actions="item.actions"
              />
            </td>
          </template>
        </v-data-table>
      <v-row>
        
      </v-row>     
  </v-container>
</template>

<script>
import Axios from "axios";
import { GET_CONTRACT_LOGS } from "@/api";
import AllContractsHistoryChanges from "./AllContractHistoryChanges"

export default {
  name: 'AllContractsHistory',
  components: {
    AllContractsHistoryChanges
  },
  data(){
    return{
        allContractsHistory: [],
        isLoad: true,
        isErr: false,
    }
  },
  methods:{
      async getContractLogs() {
      try {
        const { data: allContractsHistory } = await Axios.get(GET_CONTRACT_LOGS);
        this.allContractsHistory = allContractsHistory;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
  },
  created(){
    this.getContractLogs();
  },
  computed:{
    historyTableHeaders(){
      return[
        {
          text: "Номер контракта",
          value: "",
          align: "center",
        },
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
          value: "actionType",
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
