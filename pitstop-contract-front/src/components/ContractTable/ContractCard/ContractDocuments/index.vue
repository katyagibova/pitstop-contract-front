<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <DocumentCard />
      </v-col>

    </v-row>
    
  </v-container>
</template>

<script>
import DocumentCard from './DocumentCard.vue'

export default {
  name: 'ContractDocuments',
  components: {
    DocumentCard
  }
}
</script>

<style lang="scss" scoped>

</style>
