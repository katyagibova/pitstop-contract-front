<template>
    <v-col>
        <v-row>
            <v-col cols="9" class="inline_block">
                <v-text-field
                placeholder="Поиск"
                clearable
                style="max-width:800px"
                color="#5374FF"
                class="text_field"
                />
                <v-btn
                icon
                >
                    <v-icon
                    size="30"
                    color="#5374FF"
                    >mdi-magnify</v-icon>
                </v-btn>
            </v-col>            
            <v-col cols="1">
                <v-btn
                class="btn"
                color="#5374FF">
                    Экспорт<br>отчёта
                </v-btn>
            </v-col>
            <v-col cols="1">
                <v-btn
                class="btn"
                color="#5374FF">Создать</v-btn>
            </v-col>
            <v-col cols="1">
                <v-btn
                class="btn"
                color="#5374FF">Удалить</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <p v-if="isErr">Error</p>
            <v-card v-else>
                <v-data-table
                v-model="selected"
                :headers="tableHeaders"
                :items="contracts"
                :search="search"
                item-key="id"
                class="elevation-1"
                :loading="isLoad"
                :items-per-page="contracts.length"
                >

                

                </v-data-table>
            </v-card>
        </v-row>
        
    </v-col>
    
            

</template>

<script>
import Axios from "axios";
import { GET_CONTRACTS } from "@/api";

export default {
  name: 'ContractTable',
  components: {

  },
  data() {
    return {
      search: "",
      isLoad: true,
      isErr: false,
      contracts: [],
      dialog: false,
      selected: [],
      returnItems:{
        returnabilitys:[],
        seasonalitys:[],
        taxations:[],
        pickings:[],
        types:[]
      },
      filters:{
        productNumber:"",
        brand:"",
        article:"",
        name:"",
        taxation:"",
        seasonality:"",
        returnability:"",
        picking:"",
        type:"",
      },
      selectedProduct:null,
      selectedProductToCreate:null,
      selectedProductIndex:-1,
      createDialog:false
    };
  },
  methods: {
    async getContracts() {
      try {
        const { data: contracts } = await Axios.get(GET_CONTRACTS);
        this.contracts = contracts;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
  },
  computed: {
      tableHeaders () {
        return [
          {
            text: "Номер Контракта",
            value: "contractNumber",
            align: 'center',
            sortable: false,
          },
          {
            text: "Поставщик",
            value: "vendorName",
            sortable: false,
            align: 'center',
          },
          {
            text: "Вид",
            value: "contractType",
            sortable: false,
            align: 'center',
          },
          {
            text: "Дата подписания договора",
            value: "contractSingningDate",
            align: 'center',
            sortable: false,
          },
          {
            text: "Срок действия договора",
            value: "deliveryTime",
            sortable: false,
            align: 'center',
          },
          {
            text: "Цена контракта",
            value: "contractCost",
            sortable: false,
            align: 'center',
          },
          {
          text: "Тип оплаты",
          value: "paymentType",
          sortable: false,
          align: 'center',
          },
          {
          text: "Вид платежа",
          value: "paymentView",
          sortable: false,
          align: 'center',
          },
          {
          text: "Спецификация контракта",
          value: "specification",
          align: 'center',
          sortable: false,
          },
          {
            text: "Статус ",
            value: "status",
            align: "center",
            sortable: false,
            width: 40,
          },
          {
            text: "Кнопки",
            value: "productCreateCard",
            align: "center",
            sortable: false,
            width: 40,
          },
        ]
      },
    },
}
</script>

<style lang="scss" scoped>
.link{
  text-decoration: none;
}

.inline_block{
    display: inline-flex;
}

.text_field{
    margin: 0;
    padding: 0;
}

.btn{
    max-width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;
    color: #fff;
}
</style>
