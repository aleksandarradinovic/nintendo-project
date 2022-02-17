<template>
	<div id="header">
		<div class="navbar">
			<div class="nav-left">
				<router-link class="nintendo-logotext" to="/">
					<h1>Nintendo</h1>
				</router-link>

				<div class="mario-galery">
					<router-link
						class="nintendogalery-link routerlink"
						to="/gallery"
						>Mario Galery</router-link
					>
				</div>
				<div class="mario-forum">
					<router-link
						class="nintendoforum-link routerlink"
						to="/forum"
						>Mario Forum</router-link
					>
				</div>
				<div class="mario-news">
					<router-link class="nintendonews-link routerlink" to="/news"
						>Mario news</router-link
					>
				</div>
			</div>
			<div class="nav-right">
				<router-link class="login-link routerlink" to="/login"
					>Login</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style scoped>
#header {
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	background-color: rgba(250, 14, 14, 0.8);
	padding: 0 10px;
	transition: 0.3s;
}

.nintendo-logotext {
	text-decoration: none;
}

h1 {
	background: -webkit-linear-gradient(rgb(68, 211, 255), rgb(77, 255, 60));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	padding: 10px;
}
.mario-galery,
.mario-news,
.mario-forum {
	margin-left: 50px;
	padding: 0 50px;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.nav-left {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.nav-right {
	padding: 0 60px;
}

.login-link {
	display: block;
	text-decoration: none;
	font-size: 1.2rem;
	color: #fff;
	font-weight: 550;
}

.routerlink {
	position: relative;
	text-decoration: none;
	font-family: 'Poppins' sans-serif;
	color: #fff;
	font-size: 18px;
	letter-spacing: 0.5px;
	padding: 0 10px;
	/* transform: 0.3s; */
}

.routerlink::after {
	content: '';
	position: absolute;
	background-color: #f8f5f6;
	height: 3px;
	width: 0;
	left: 0;
	bottom: -10px;
	transition: 0.3s;
}

.routerlink:hover {
	color: #fff;
}
.routerlink:hover:after {
	width: 100%;
}
</style>
