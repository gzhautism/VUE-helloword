<template>
	<div class="about">
		<div id="app">
			<h1>计数器</h1>
			<button @click="onlick">-</button>
			<span>{{num}}</span>
			<button @click="twolick">+</button>
			<br>
			<span>{{ comput1() }}</span>
			<span>{{ comput2 }}</span>
			<br>
			<h1>计数器2</h1>
			<button @click="num2--">-</button>
			<span>{{num2}}</span>
			<button @click="num2++">+</button>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				num: 0,
				num2: 0,
			}
		},
		methods: {
			comput1() {
				console.log("普通方法执行")
				return "普通方法"
			},
			onlick() {
				this.num--;
			},
			twolick() {
				this.num++;
			}
		},
		computed: {
			// 计算属性
			comput2() {
				console.log("计算方法执行")
				return "计算方法" + this.num+this.num2
			}
		},
		watch: {
			// 方法监听
			num(newValue,oldValue){
				console.log("监听到num变化",newValue,oldValue)
			}
		},
	}
</script>
