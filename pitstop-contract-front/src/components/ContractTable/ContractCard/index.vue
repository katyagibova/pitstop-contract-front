<template>
    <v-card>
        
        <v-tabs
        v-model="tab"
        background-color="#5374FF"
        centered
        dark
        icons-and-text
        >
        
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
            Данные
            <v-icon>mdi-clipboard-text-outline</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
            История
            <v-icon>mdi-clock-fast</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
            Документы
            <v-icon>mdi-file-document-multiple-outline</v-icon>
        </v-tab>

        <v-tab href="#tab-4">
            Расторжение
            <v-icon>mdi-lock-open-remove-outline</v-icon>
        </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="i in 4"
            :key="i"
            :value="'tab-' + i"
        >
            <v-card flat>
                <v-card> <ContractData /> </v-card>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
    </v-card>   
</template>

<script>
import ContractData from "./ContractData/index"

export default {
  name: 'ContractCard',
  components: {
      ContractData,
  },
  data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
}
</script>

<style lang="scss" scoped>

</style>