<template>
<div>
  <div v-for="(value, index) in displayList" :key="index">
    <span v-if="value.name === 'Recommanded'">
      <h3> Recommanded Payment Option </h3>
      <option-tile :list="recommandedList" :uiConfig="uiConfig"/>
    </span>
    <span v-if="value.name === 'Saved'">
      <h3> Saved Payment Option </h3>
      <option-tile :list="savedList" :uiConfig="uiConfig"/>
    </span>
    <span v-if="value.name === 'Others'">
      <h3> Other Payment Option </h3>
      <option-tile :list="otherOptions" :uiConfig="uiConfig"/>
    </span>

  </div>
</div>
</template>

<script>
import optionTile from './option-tile.vue'
export default {
  components:{
    optionTile
  },
  computed:{
    displayList(){
      return this.$store.state.config.displayComponent;
    },
    recommandedList(){
      return this.$store.getters.getRecommandedOptions;
    },
    savedList(){
      return this.$store.getters.getSavedOptions;
    },
    otherOptions(){
      return this.$store.getters.getOtherOptions;
    },
    uiConfig(){
      return this.$store.state.config.uiConfig;
    }
  }
}
</script>

<style>
</style>