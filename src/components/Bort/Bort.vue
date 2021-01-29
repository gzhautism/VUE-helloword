<template>
	<div class="bort">
		<span>
			<slot name="to"></slot>
		</span>
		<img v-for="(item,index) in 5" 
			:key="index" 
			:src="index<startnum?startpng2:startpng1" 
			:alt="item" 
			@click="setstarnum(index+1)">
		<span>{{startnum}}星</span>
	</div>
</template>

<script>
	export default {
		props: {
			startporp: {
				type: Number,
				require: true,
			}
		},
		created() {
			this.startnum = this.startporp;
		},
		data() {
			return {
				startnum: 4,
				startpng1: require("./img/star.png"),
				startpng2: require("./img/starsel.png"),
			}
		},
		methods: {
			setstarnum(num) {
				this.startnum = num;
				this.$emit("tellparent", {"startnum": this.startnum})
			}
		}
	}
</script>

<style lang="less">
	.bort{
		display: inline-block;
		img{
			vertical-align: -10px;
		}
	}
</style>
