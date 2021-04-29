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

        <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="i in tabs"
            :key="i"
            :value="'tab-' + i"
        >
            <v-card flat>

              <router-view />
             

            </v-card>
        </v-tab-item>
        </v-tabs-items>
    </v-card>   
</template>

<script>

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
        ]
      }
    },
}
</script>

<style lang="scss" scoped>

</style>