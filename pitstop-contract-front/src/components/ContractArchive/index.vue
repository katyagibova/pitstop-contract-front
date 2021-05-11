<template>
  <v-container>
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
                :items="contractArchive"
                :loading="isLoad"
                item-key="id"
            >
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
  </v-container>
</template>

<script>
import Axios from "axios";
import { GET_ALL_ARCHIVE_CONTRACTS } from "@/api";

export default {
  name: 'ContractArchive',
  components: {
  },
  data(){
    return{
        contractArchive: [],
        isLoad: true,
        isErr: false,
    }
  },
  methods:{
      async getAllArchiveContracts() {
      try {
        const { data: contractArchive } = await Axios.get(GET_ALL_ARCHIVE_CONTRACTS);
        this.contractArchive = contractArchive;
      } catch {
        this.isErr = true;
      } finally {
        this.isLoad = false;
      }
    },
  },
  created(){
    this.getAllArchiveContracts();
  },
  computed:{
    tableHeaders() {
      return [
        {
          text: "Номер Контракта",
          value: "contractNumber",
          align: "center",
        //   filter: value => {
        //       if (!this.filters.contractNumber) return true
        //       return value.toLowerCase().indexOf(this.filters.contractNumber.toLowerCase()) > -1
        //     },
          
        },
        {
          text: "Поставщик",
          value: "vendorName",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.vendorName) return true
        //     return value.toLowerCase().indexOf(this.filters.vendorName.toLowerCase()) > -1
        //   },
        },
        {
          text: "Вид",
          value: "contractType",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.contractType) return true
        //     return value === this.filters.contractType
        //   },
        },
        {
          text: "Дата подписания договора",
          value: "contractSingningDate",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.contractSingningDate) return true
        //     return value.toLowerCase().indexOf(this.filters.contractSingningDate.toLowerCase()) > -1
        //   },
        },
        {
          text: "Срок действия договора",
          value: "deliveryTime",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.deliveryTime) return true
        //     return value.toLowerCase().indexOf(this.filters.deliveryTime.toLowerCase()) > -1
        //   },
        },
        {
          text: "Цена контракта",
          value: "contractCost",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.contractCost) return true
        //     return value.toLowerCase().indexOf(this.filters.contractCost.toLowerCase()) > -1
        //   },
        },
        {
          text: "Тип оплаты",
          value: "paymentType",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.paymentType) return true
        //     return value === this.filters.paymentType
        //   },
        },
        {
          text: "Вид платежа",
          value: "paymentView",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.paymentView) return true
        //     return value === this.filters.paymentView
        //   },
        },
        {
          text: "Спецификация контракта",
          value: "specification",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.specification) return true
        //     return value === this.filters.specification
        //   },
        },
        {
          text: "Статус ",
          value: "status",
          align: "center",
        //   filter: value => {
        //     if (!this.filters.status) return true
        //     return value === this.filters.status
        //   },
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
}
</script>

<style lang="scss" scoped>
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
