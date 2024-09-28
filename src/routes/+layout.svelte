<script>
	import '../app.css';
	import { browser } from '$app/environment';

	if (browser) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		}
	}
</script>

<slot />
