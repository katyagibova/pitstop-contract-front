<template>
  <v-container>
    <v-col>
      <v-row class="heading">
        <h3>Номер контракта: {{contract.contractNumber }}</h3>
      </v-row>
      <v-row class="main_data_content">
        <v-col cols="6">
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row >
                <p>Поставщик</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  value="{contract.vendorName}"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>

        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="6" class="name_field">
              <v-row >
                <p>Дата заключения договора</p>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-text-field
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
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
                  value="John Doe"
                  label="Solo"
                  solo
                  readonly
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>

        </v-col>
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
.heading{
  display: flex;
  align-items: center;
  justify-content: center;
}

h3{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
}

.main_data_content{
  margin-top: 35px;
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