<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';

	if (browser) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		}
	}
</script>

<main class="w-[90%] m-auto md:p-4 md:w-[40%] flex flex-col">
  <slot />
</main>
