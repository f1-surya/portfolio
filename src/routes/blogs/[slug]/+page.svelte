<script>
  import 'highlight.js/styles/androidstudio.css';
  export let data;
</script>

<svelte:head>
  <title>{data.blog.title}</title>
</svelte:head>

{@html data.blog.content}

<style>
  :global(h1) {
    margin-bottom: 10px;
  }
  :global(h2) {
    margin-top: 10px;
    margin-bottom: 7px;
  }
  :global(.hljs) {
    overflow-x: scroll;
    white-space: pre;
    text-align: start;
    scrollbar-width: thin;
    scrollbar-color: #01143c #010120;
  }
</style>
