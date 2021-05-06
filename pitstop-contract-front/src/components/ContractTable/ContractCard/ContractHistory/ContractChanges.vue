<template>
  <v-data-table
    disable-pagination
    :headers="historyTableHeaders"
    :items="actionsWithUniqueKey"
    item-key="key"
    hide-default-footer
    disable-sort
    class="order-products"
    dark
  >
  </v-data-table>
</template>
<script>
export default {
    props: ["actions"],
  data() {
    return {
      historyTableHeaders: [
        {
          text: "",
          value: "",
        },
        {
          text: "Поле",
          value: "poleName",
        },
        {
          text: "Изначальное значение",
          value: "oldValue",
        },
        {
          text: "Новое значение",
          value: "newValue",
        },
      ],
    };
  },
  computed: {
    actionsWithUniqueKey() {
      return this.actions.map((item, i) => {
        return { ...item, key: `${item.id}-${i}` };
      });
    },
  },
}
</script>

<style lang="scss">
.order-products {
  .v-data-table__wrapper {
    background: #5374FF;
    color:white;
  }
}
</style>
