<template>
  <div class="row">
    <div class="col-6">
      <h3>Order Categories</h3>

      <draggable
        :list="list"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
let id = 1;
export default {
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    draggable
  },
  watch:{
    inputList: function(val, oldVal){
      this.list = val;
    }
  },
  created(){
    this.list = JSON.parse(JSON.stringify(this.inputList));
  },
  data() {
    return {
      enabled: true,
      list: [],
      dragging: false
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
    inputList(){
      return this.$store.state.config.displayComponent;
    }
  },
  methods: {
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
      console.log("list ", this.list);
      this.$store.commit("setDisplayComponent", this.list);
    }
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>