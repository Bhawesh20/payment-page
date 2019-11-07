<template>
    <div>
        <h3> Configure UI </h3>
        <el-row>
            <el-col> Name Font Size </el-col>
            <el-col> <el-input-number v-model="nameFontSize" @change="changeNameFontSize" :min="1" :max="100"></el-input-number> </el-col>
        </el-row>

        <el-row>
            <el-col> Icon Size </el-col>
            <el-col> <el-input-number v-model="iconSize" @change="changeLogoSize" :min="10" :max="100"></el-input-number> </el-col>
        </el-row>

        <el-row>
            <el-col> Tab Size </el-col>
            <el-col> <el-input-number v-model="tabSize" @change="changeTabSize" :min="50" :max="1000"></el-input-number> </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    data(){
        return{
            nameFontSize:20,
            iconSize: 20,
            tabSize: 70
        }
    },
    methods:{
        changeNameFontSize(){
            console.log(this.nameFontSize);
            this.$store.commit('setNameFontSize', this.nameFontSize)
        },
        changeLogoSize(){
            this.$store.commit('setLogoSize', this.iconSize)
        },
        changeTabSize(){
            this.$store.commit('setTabSize', this.tabSize)
        }
    }
}
</script>

<style>

</style>
