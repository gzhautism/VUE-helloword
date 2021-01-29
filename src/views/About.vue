<template>
	<div class="about">
		<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
		<div>
			<h1>使用全局组件</h1>
			<hiWorld msg='20210126' :num="20">
				<h2 slot="title">姓名</h2>
				<h3 slot="footer">关羽</h3>
			</hiWorld>
		</div>
		<Starp></Starp>
	</div>
</template>
<script>
	import Starp from '@/components/Starp.vue'

	export default {
		components: {
			Starp,
		},
		data() {
			return {
				num: 0,
				num2: 0,
			}
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
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
				return "计算方法" + this.num + this.num2
			}
		},
		watch: {
			// 方法监听
			num(newValue, oldValue) {
				console.log("监听到num变化", newValue, oldValue)
			}
		},
	}
</script>
