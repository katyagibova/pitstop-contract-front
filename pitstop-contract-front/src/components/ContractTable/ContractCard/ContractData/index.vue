<template>
  <v-container>
    <v-col>
      <v-row class="main_data_content">
        <v-spacer></v-spacer>
        <v-col cols="5">
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row >
                <p>Поставщик</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.vendorName"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Вид договора</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.contractType"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Контрактное количество</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.contractQuantity"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Стоимость договора</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.contracrCost"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>БИК</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.vendorBIC"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>ЕГРЮЛ</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.vendorEGRUL"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>ИНН</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.vendorINN"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Спецификация контракта</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.specification"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>

        </v-col>
        <v-col cols="5">
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row >
                <p>Дата заключения договора</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.contractConclusionDate"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Дата начала срока действия контракта</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.contractStartDate"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Дата окончания срока действия контракта</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.contractExpireDate"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Фактическая цена контракта</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.actualContractPrise"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Условие платежа</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.paymentType"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Статус</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.status"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Дата последнего изменения</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.lastChangeDate"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row>
                <p>Сроки поставки</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  :value="this.contractData.deliveryTime"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>

        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-col>
    
  </v-container>
</template>

<script>
import Axios from "axios";
import { GET_CONTRACT_BY_ID } from "@/api";

export default {
  name: "ContractData",
  components: {},
  data() {
    return {
      isErr: false,
      isLoading: true,
      contractData: {},
    };
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
};
</script>

<style lang="scss" scoped>
.main_data_content{
  margin-top: 25px;
}

.name_field{
  display: flex;
  align-items: center;
  height: 50px;  
}

p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  padding-left: 35px;
  margin: 0;
}

</style>