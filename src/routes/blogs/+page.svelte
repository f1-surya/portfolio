<script lang="ts">
  export let data: { blogs: { slug: string; title: string; date: Date }[] };
</script>

<svelte:head>
  <title>Blogs</title>
  <meta name="description" content="Surya's blogs" />
</svelte:head>

<h1 class="text-3xl font-bold mt-2">Blogs</h1>
<div class="flex flex-col gap-4 mt-4">
  {#each data.blogs as blog}
    <a href="/blogs/{blog.slug}">
      <div
        class="flex flex-col gap-2 p-4 rounded-lg border-2 border-gray-700 hover:border-blue-400 hover:bg-[#010321] transition hover:shadow-md shadow-cyan-500"
      >
        <h2 class="text-xl font-bold text-start">{blog.title}</h2>
        <p class="text-md text-start dark:text-gray-300">Date: {blog.date.toLocaleDateString()}</p>
      </div>
    </a>
  {/each}
</div>
