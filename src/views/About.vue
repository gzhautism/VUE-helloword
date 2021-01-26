<template>
  <div class="about">
    <div id="app">
		<h1>计数器</h1>
		<button @click="al">-</button>
		<span>{{num}}</span>
		<button @click="li">+</button>
	</div>
  </div>	
</template>
<script>
export default {
	data(){
		return{
			num:0
		}
	},
	methods:{
		al(){
			this.num--;
		},
		li(){
			this.num++;
		}
	}
}
</script>
