<template>
  <v-container class="document_cards">
    <v-row>
      <v-col
      v-for="(item, i) in contractDocumentsData"
      :key="i"      
      cols="4">
        <v-card
        elevation="0"
        class="card">
          <v-card-title>
            {{contractDocumentsData[i].number}}
          </v-card-title>
          <v-card-actions>
            <v-row>
              <v-col cols="3" class="bottom_line">
                {{contractDocumentsData[i].extension}}
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4" class="bottom_line">
                <v-btn
                color="#fff"
                class="btn_text">
                  Скачать
                </v-btn>
              </v-col>
              <v-col cols="4" class="bottom_line">
                <v-btn
                color="#fff"
                class="btn_text">
                  Удалить
                </v-btn>
              </v-col>
            </v-row>            
          </v-card-actions>

        </v-card>
      </v-col>
      <!-- <v-col
      v-for="(item, i) in contractDocumentsData"
      :key="i"
      cols="4">
        <DocumentCard
        :documentsData="item" />
        
      </v-col> -->

    </v-row>
    
  </v-container>
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
      contractDocumentsData: [],
    };
  },
  methods: {
    async getContractDocumentByID() {
      try {
        const { data: contractDocumentsData } = await Axios.get(GET_CONTRACT_DOCUMENTS_BY_ID,{
          params: {
            id: this.contractID,
          }
        });
        this.contractDocumentsData = contractDocumentsData;
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
.document_cards{
  margin-top: 20px;
}

.card{
  background-color: #5374FF;
  color: #fff;
  height: 100%;
  border-radius: 11.3433px;
}

p{
  margin: 0;
}

.bottom_line{
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.btn_text{
  color: #5374FF;
}
</style>