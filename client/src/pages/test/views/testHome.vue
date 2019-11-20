<template>
    <div>
        路由测试
        <h5>modules.test.state.name: {{this.name }}</h5>
        <h5>modules.test.state.getters: {{this.name2 }}</h5>
        <van-button @click="changeName('hello')">修改名字</van-button>
    </div>
</template>

<script>
// vuex使用示例
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex'
import {Button} from 'vant'
import {testGet} from '@/api/test/index.js'
export default {
    components:{
        [Button.name]:Button
    },
    created(){
        console.log(this.$store.state)
        this.getData()
        // console.log()

    },
    computed:{
        
        ...mapState({
            name:state => state.test.name
        }),
        ...mapGetters('test',{
            name2:'getName'
        })
    },
    methods:{
        ...mapActions('test',{
            changeName:'test'
        }),
        async getData(){
            console.log(await testGet({name:'hello'}))
        } 
    }
}
</script>

<style lang='scss' scoped>

</style>