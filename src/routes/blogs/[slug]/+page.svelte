<script lang="ts">
  import "./markdown.css";
  import "highlight.js/styles/androidstudio.css";
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.blog.title}</title>
</svelte:head>

<h1 class="mt-2">{data.blog.title}</h1>
<span class="self-start my-4 text-gray-300"
  >Date posted: {data.blog.date.toLocaleDateString()}</span
>

{@html data.blog.content}
