<template>
	<div id="app">
		<NavBar />
		<router-view />
	</div>
</template>
<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {

			}
		},
		components:{
			NavBar
		}
	}
</script>
<style lang="less">
	#app{
		height: 100vh;
			background-color: #E9EBEA;
	}
</style>
