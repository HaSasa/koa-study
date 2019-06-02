<template>
  <div class="hello">
      <button type="button" @click="getJson">从后端取json</button>
      <div class="showJson">{{json}}</div>
  </div>
</template>

<script>
import {getJson} from '@/api/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      json:null
    }
  },
  methods:{
    getJson(){
       // 调用我们的后端getJson接口
     getJson().then(res=>{
       console.log(res)
       this.json = res.data
       
       console.log(a)  
     }).catch(err=>{
      //  console.log(err,'1111')
     })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "@/assets/sass/base.scss";
	.hello{
		height: 3000px;
		width: 1200px;
		margin: 80px  auto 0;
		background-color: red;
	}
</style>


