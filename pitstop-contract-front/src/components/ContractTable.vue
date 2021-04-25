<template>
    <v-col>
        <v-row>
            <v-text-field
            placeholder="Поиск"
            clearable
            style="max-width:500px"
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
        </v-row>
        
    </v-col>
    
            

</template>

<script>

export default {
  name: 'ContractTable',
  components: {

  }
}
</script>

<style lang="scss" scoped>
.link{
  text-decoration: none;
}

.text_field{
    margin: 0;
    padding: 0;
}
</style>
