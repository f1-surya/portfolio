<script lang="ts">
  let { src, url } = $props();
</script>

<a class="mb-2" href={url} target="_blank">
  <img {src} alt="link" class="w-5 h-5" />
</a>
