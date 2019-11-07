<template>
    <div>
        <el-card :style="{height: uiConfig.tabSize + 'px'}" v-for="(value, index) in list" :key="index" shadow="always">
            <el-row>
                <el-col :span="4"> <img :src="getImgUrl(value)" :height="uiConfig.iconSize" :width="uiConfig.iconSize"/> </el-col>
                <el-col :span="20">
                    <span class="name" v-bind:style="{ fontSize: uiConfig.nameFontSize + 'px' }"> 
                        {{value.name}} 
                    </span>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type: Array,
            required: true
        },
        uiConfig:{
            type:Object
        }
    },
    methods:{
        getImgUrl(value) {
            return value.icon;
        },
        getAlt(value){
            return value.icon;
        },
    },
}
</script>

<style>
.right-align{
    text-align: right;
}
</style>
