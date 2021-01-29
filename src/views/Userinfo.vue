<template>
	<div class="userinfo">
		<ul>
			<li><h3>用户名:{{user}}</h3></li>
			<li><h3><router-link :to="{name:'SetPassword'}">修改密码</router-link></h3></li>
			<li><h3><router-link :to="{name:'SetHead'}">修改头像</router-link></h3></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:this.$jsCookie.get('user')
			}
		},
	}
</script>

<style>
</style>
