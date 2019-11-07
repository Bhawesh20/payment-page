<template>
<div>
  <draggable-comp> </draggable-comp>
  <ui-config-vue> </ui-config-vue>
</div>
</template>

<script>
import draggableComp from "./draggable-component.vue";
import uiConfigVue from './ui-configuration.vue';
export default {
  components:{
    draggableComp,
    uiConfigVue
  }
}
</script>

<style>
</style>