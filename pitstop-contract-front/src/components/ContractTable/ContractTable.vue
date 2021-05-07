<template>
  <v-container>
    <v-col>
      <v-row>
        <v-col cols="9" class="inline_block">
          <v-text-field
            v-model="srh"
            placeholder="Поиск"
            clearable
            style="max-width: 800px"
            color="#5374FF"
            class="text_field"
          />
          <v-btn icon>
            <v-icon size="30" color="#5374FF">mdi-magnify</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="btn" color="#5374FF"> Экспорт<br />отчёта </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="btn" color="#5374FF">Создать</v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="btn" color="#5374FF">Удалить</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <p v-if="isErr">Error</p>
        <v-card v-else>
          <v-data-table
            v-model="selected"
            :headers="tableHeaders"
            :items="contracts"
            :search="srh"
            :loading="isLoad"
            item-key="id"
          >
            <template v-slot:[`body.prepend`]>
              <tr>
                <td>
                  <v-text-field
                    v-model="filters.contractNumber"
                    type="string"
                    label="Номер контракта"
                    clearable
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="filters.vendorName"
                    type="string"
                    label="Поставщик"
                    clearable
                  ></v-text-field>
                </td>
                <td>
                  <v-select
                    v-model="filters.contractType"
                    :items="returnItems.contractType"
                    type="string"
                    label="Вид"
                    clearable
                  ></v-select>
                </td>
                <td>
                  <v-text-field
                    v-model="filters.contractSingningDate"
                    type="string"
                    label="Дата"
                    clearable
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="filters.deliveryTime"
                    type="string"
                    label="Срок"
                    clearable
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="filters.contractCost"
                    type="string"
                    label="Цена"
                    clearable
                  ></v-text-field>
                </td>
                <td>
                  <v-select
                    v-model="filters.paymentType"
                    :items="returnItems.paymentType"
                    type="string"
                    label="Тип оплаты"
                    clearable
                  ></v-select>
                </td>
                <td>
                  <v-select
                    v-model="filters.paymentView"
                    :items="returnItems.paymentView"
                    type="string"
                    label="Вид платежа"
                    clearable
                  ></v-select>
                </td>
                <td>
                  <v-select
                    v-model="filters.specification"
                    :items="returnItems.specification"
                    type="string"
                    label="Спецификация контракта"
                    clearable
                  ></v-select>
                </td>
                <td>
                  <v-select
                    v-model="filters.status"
                    :items="returnItems.status"
                    type="string"
                    label="Статус"
                    clearable
                  ></v-select>
                </td>
              </tr>
            </template>

            <template
            v-slot:[`item.openBtn`]="{ item }">
              <v-btn 
              icon
              :to="`/contract-details/${item.id}/`">
                <v-icon color="#5374FF"> mdi-card-bulleted </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Axios from "axios";
import { GET_CONTRACTS, GET_CONTRACTSTYPES, GET_PAYMENTTYPES, GET_PAYMENTVIEWS, GET_SPECIFICATIONS, GET_STATUSES } from "@/api";


export default {
  name: "ContractTable",
  components: {
  },
  data() {
    return {
      isLoad: true,
      isErr: false,
      contracts: [],
      selected: [],
      srh: "",
      selectedContractToOpen: null,
      selectedProductIndex: -1,
      dialog: false,
      filters:{
            contractNumber:"",
            vendorName:"",
            contractType:"",
            contractSingningDate:"",
            deliveryTime:"",
            contractCost:"",
            paymentType:"",
            paymentView:"",
            specification:"",
            status:"",
          },
      returnItems:{
        contractType:[],
        paymentType:[],
        paymentView:[],
        specification:[],
        status:[]
      },
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
    async getContractType() {
      try {
        const { data: contractType } = await Axios.get(GET_CONTRACTSTYPES);
        this.returnItems.contractType = contractType;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
    async getPaymentType() {
      try {
        const { data: paymentType } = await Axios.get(GET_PAYMENTTYPES);
        this.returnItems.paymentType = paymentType;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
    async getPaymentView() {
      try {
        const { data: paymentView } = await Axios.get(GET_PAYMENTVIEWS);
        this.returnItems.paymentView = paymentView;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
    async getSpecification() {
      try {
        const { data: specification } = await Axios.get(GET_SPECIFICATIONS);
        this.returnItems.specification = specification;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
    async getStatus() {
      try {
        const { data: status } = await Axios.get(GET_STATUSES);
        this.returnItems.status = status;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
    openContractCard(item){
      this.selectedContractToOpen = item.id;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.selectedContractToOpen = null;
        this.selectedProductIndex = -1;
      });
    },
  },
  created() {
    this.getContracts();
    this.getContractType();
    this.getPaymentType();
    this.getPaymentView();
    this.getSpecification();
    this.getStatus();
  },
  computed: {
    tableHeaders() {
      return [
        {
          text: "Номер Контракта",
          value: "contractNumber",
          align: "center",
          filter: value => {
              if (!this.filters.contractNumber) return true
              return value.toLowerCase().indexOf(this.filters.contractNumber.toLowerCase()) > -1
            },
          
        },
        {
          text: "Поставщик",
          value: "vendorName",
          align: "center",
          filter: value => {
            if (!this.filters.vendorName) return true
            return value.toLowerCase().indexOf(this.filters.vendorName.toLowerCase()) > -1
          },
        },
        {
          text: "Вид",
          value: "contractType",
          align: "center",
          filter: value => {
            if (!this.filters.contractType) return true
            return value === this.filters.contractType
          },
        },
        {
          text: "Дата подписания договора",
          value: "contractSingningDate",
          align: "center",
          filter: value => {
            if (!this.filters.contractSingningDate) return true
            return value.toLowerCase().indexOf(this.filters.contractSingningDate.toLowerCase()) > -1
          },
        },
        {
          text: "Срок действия договора",
          value: "deliveryTime",
          align: "center",
          filter: value => {
            if (!this.filters.deliveryTime) return true
            return value.toLowerCase().indexOf(this.filters.deliveryTime.toLowerCase()) > -1
          },
        },
        {
          text: "Цена контракта",
          value: "contractCost",
          align: "center",
          filter: value => {
            if (!this.filters.contractCost) return true
            return value.toLowerCase().indexOf(this.filters.contractCost.toLowerCase()) > -1
          },
        },
        {
          text: "Тип оплаты",
          value: "paymentType",
          align: "center",
          filter: value => {
            if (!this.filters.paymentType) return true
            return value === this.filters.paymentType
          },
        },
        {
          text: "Вид платежа",
          value: "paymentView",
          align: "center",
          filter: value => {
            if (!this.filters.paymentView) return true
            return value === this.filters.paymentView
          },
        },
        {
          text: "Спецификация контракта",
          value: "specification",
          align: "center",
          filter: value => {
            if (!this.filters.specification) return true
            return value === this.filters.specification
          },
        },
        {
          text: "Статус ",
          value: "status",
          align: "center",
          filter: value => {
            if (!this.filters.status) return true
            return value === this.filters.status
          },
        },
        {
          text: "Открыть карточку контракта",
          value: "openBtn",
          align: "center",
          sortable: false,
          width: 60,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}

.inline_block {
  display: inline-flex;
}

.text_field {
  margin: 0;
  padding: 0;
}

.btn {
  max-width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  color: #fff;
}

.v-modal {
  z-index: 100 !important;
}
</style>
