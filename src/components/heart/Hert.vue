<template>
	<div class="hert" @click="clock">
		<span>
			<slot name="to"></slot>
		</span>
		<img :src="state?statepng1:statepng2" alt="">
		<span>{{state?"取消":"点赞"}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			startprop: {
				require: true,
				type: Boolean,
			}
		},
		created(){
			this.state = this.startprop
		},
		data() {
			return {
				state: true,
				statepng1: require("./img/heart.png"),
				statepng2: require("./img/heartsel.png"),
			}
		},
		methods: {
			clock(){
				this.state = !this.state;
				this.$emit("tellparent",{"state":this.state})
			}
		}
	}
</script>

<style lang="less">
	.hert {
		display: inline-block;

		img {
			vertical-align: -10px;
		}
	}
</style>
