<template>
    <div>
        
      <v-tabs
      v-model="tab"
      background-color="#5374FF"
      centered
      dark
      icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab
        v-for="(item, i) in tabs" 
        :key="i"
        :to="item.to"
        exact 
        >
          {{ item.label }}
          <v-icon>{{item.icon}}</v-icon>
        </v-tab>
        
      </v-tabs>
      <v-row class="heading">
        <h3>Номер контракта: {{contractData.contractNumber }} and {{contractData.id}}</h3>
      </v-row>

      <router-view />
    </div>
</template>

<script>
import Axios from "axios";
import { GET_CONTRACT_BY_ID } from "@/api";

export default {
  name: 'ContractCard',
  components: {
  },
  data () {
      return {
        tab: null,
        tabs:[
          {
            label: "Данные",
            to: `/contract-details/${this.$route.params.contractID}/`,
            icon: "mdi-clipboard-text-outline"
          },
          {
            label: "История",
            to: `/contract-details/${this.$route.params.contractID}/history`,
            icon: "mdi-clock-fast"
          },
          {
            label: "Документы",
            to: `/contract-details/${this.$route.params.contractID}/documents`,
            icon: "mdi-file-document-multiple-outline"
          },
          {
            label: "Расторжение",
            to: `/contract-details/${this.$route.params.contractID}/termination`,
            icon: "mdi-lock-open-remove-outline"
          },
        ],
        isErr: false,
        isLoading: true,
        contractData: {},
      }
    },
  methods: {
    async getContractByID() {
      try {
        const { data: contractData } = await Axios.get(GET_CONTRACT_BY_ID,{
          params: {
            id: this.contractID,
          }
        });
        this.contractData = contractData;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
  created(){
    this.getContractByID();
  },
  computed:{
    contractID() {
      return this.$route.params.contractID;
    },
  }
}
</script>

<style lang="scss" scoped>
.heading{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

h3{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
}

</style>