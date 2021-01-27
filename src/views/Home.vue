<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<div>
		<h1>使用全局组件</h1>
		<hiWorld msg='202120:56' :num="10">
			<button slot="footer">123</button>
			<button slot="title">傻逼</button>
		</hiWorld>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
