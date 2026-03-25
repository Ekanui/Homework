<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const username = computed(() => {
	const value = route.query.username
	return typeof value === 'string' && value.length > 0 ? value : 'User'
})

const logout = () => {
	void router.push('/')
}
</script>

<template>
	<section class="home-page">
	<a-card class="home-card" title="Home">
	<p class="headline">Welcome, {{ username }}</p>
	<p class="copy">You are logged in and the app route is now working.</p>
	<a-button type="primary" @click="logout">Logout</a-button>
	</a-card>
	</section>
</template>

<style scoped>
.home-page {
	min-height: 100vh;
	display: grid;
	place-items: center;
	padding: 24px;
	background: linear-gradient(135deg, #f3f7ff 0%, #fff8ef 100%);
}

.home-card {
	width: min(100%, 480px);
}

.headline {
	margin-bottom: 8px;
	font-size: 24px;
	font-weight: 600;
}

.copy {
	margin-bottom: 20px;
	color: #595959;
}
</style>
