<script>
  import "./markdown.css";
  import "highlight.js/styles/androidstudio.css";
  export let data;
</script>

<svelte:head>
  <title>{data.blog.title}</title>
</svelte:head>

{@html data.blog.content}
