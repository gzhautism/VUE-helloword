<template>
	<div class="app">
		<button @click="num--">-</button>
		<span>{{num}}</span>
		<button @click="num++">+</button>
		<br>
		<button>切换</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
			}
		},
		beforeCreate(){
			console.log("组件初始化之前")
		},
		created(){
			console.log("组件初始化")
		},
		beforeMount(){
			console.log("组件创建之前")
		},
		mounted() {
			console.log("组件创建了")
		},
		beforeUpdate(){
			console.log("组建更新之前")
		},
		updated() {
			console.log("组建更新了")
		},
		beforeDestroy() {
			console.log("组建清理数据之前")
		},
		destroyed() {
			console.log("组建清理数据后")
		}
	}
</script>

<style>
</style>
