<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from './layout/header.vue'
export default {
	components: {
		Header,
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@100;300&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	overflow: hidden;
	font-family: 'Roboto', sans-serif;
}
</style>
