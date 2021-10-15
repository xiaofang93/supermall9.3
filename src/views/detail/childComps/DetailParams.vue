<template>
  <div v-if="Object.keys(params).length !== 0" class="params">
    <table v-for="(item, index) in params.sizes" :key="index" class="sizes">
      <tr v-for="(te, indez) in item" :key="indez" class="tr">
        <td v-for="(tc, indec) in te" :key="indec" class="td">
          {{ tc }}
        </td>
      </tr>
    </table>

    <table class="infos">
      <tr v-for="(ite, indev) in params.infos" :key="indev" class="ite">
        <td>
          {{ ite.key }}
        </td>
        <td class="ite-value">
          {{ ite.value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.params {
  margin-top: 15px;
}
.sizes {
  width: 100%;
  height: 120px;
  border-bottom: 3px solid #ccc;
  padding-bottom: 10px;
  /* 去掉单元格间隙 */
  border-spacing: 0;
}

.td {
  height: 50px;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
}

.infos {
  width: 100%;
}
.ite td {
  font-size: 18px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  color: rgb(45, 196, 171);
  width: 0px;
}
.ite .ite-value {
  font-size: 15px;
  color: rgb(211, 66, 66);
}
</style>
