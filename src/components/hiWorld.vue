<template>
	<div>
		
		<h1>我是World组件</h1>
		<p>接收到msg的值为{{msg}}</p>
		<p>接收到num的值为{{num}}</p>
		<slot name="title"></slot>
		<slot name="footer"></slot>
	</div>
</template>

<script>
	export default {
		props: {
			msg:{
				type:String,
				default:"20210126",
			},
			num: {
				type:Number,
				require:true
			}
		},
		components: {
			
		}
	}
</script>

<style>
</style>
