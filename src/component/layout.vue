<template>
<el-row>
  <el-col :span="6"><left-pane> </left-pane> </el-col>
  <el-col :span="12"><div class="grid-content"> <right-pane> </right-pane> </div></el-col>
</el-row>
</template>

<script>
import leftPane from './left-pane.vue'
import rightPane from './right-pane.vue'
export default {
  components:{
      leftPane,
      rightPane
  }
}
</script>

<style scoped>
.bg-purple{
  height: 100vh;
}
</style>