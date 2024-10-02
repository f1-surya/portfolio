<script lang="ts">
  import "../app.css";
</script>

<main class="w-[90%] m-auto md:p-4 md:w-[40%] flex flex-col">
  <slot />
  <div class="flex flex-row gap-4 self-center w-full justify-center mt-4 text-gray-400">
    <a href="/">Home</a>
    <a href="/blogs">Blogs</a>
    <a href="/projects">Projects</a>
    <a href="https://github.com/f1-surya/portfolio">Source</a>
  </div>
</main>
