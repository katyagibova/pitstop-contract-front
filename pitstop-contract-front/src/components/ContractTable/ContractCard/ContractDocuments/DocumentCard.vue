<template>
    <v-card class="card">
        <p>{{ contractDocumentData.extension }}</p>         
        <p>zdbvzdbvzidb kvkifv</p>         
        <p>zdbvzdbvzidb kvkifv</p>         

    </v-card>
</template>

<script>
import Axios from "axios";
import { GET_CONTRACT_DOCUMENTS_BY_ID } from "@/api";

export default {
  name: 'DocumentCard',
  components: {
  },
  data() {
    return {
      isErr: false,
      isLoading: true,
      contractDocumentData: [],
    };
  },
  methods: {
    async getContractDocumentByID() {
      try {
        const { data: contractDocumentData } = await Axios.get(GET_CONTRACT_DOCUMENTS_BY_ID,{
          params: {
            id: this.contractID,
          }
        });
        this.contractDocumentData = contractDocumentData;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
  created(){
    this.getContractDocumentByID();
  },
  computed:{
    contractID() {
      return this.$route.params.contractID;
    },
  }
}
</script>

<style lang="scss" scoped>
.card{
  background-color: #5374FF;
  color: #fff;
  height: 100%;
  border-radius: 11.3433px;
}

p{
  margin: 0;
}
</style>
