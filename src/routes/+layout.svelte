<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
</script>

<main class="w-[90%] m-auto md:p-4 md:w-[40%] flex flex-col">
  <slot />
  <div
    class="flex flex-row gap-4 self-center w-full justify-center my-4 text-gray-400"
  >
    <a href="/" class={$page.url.pathname == "/" ? "text-blue-400" : ""}>Home</a
    >
    <a
      href="/blogs"
      class={$page.url.pathname == "/blogs" ? "text-blue-400" : ""}>Blogs</a
    >
    <a
      href="/projects"
      class={$page.url.pathname == "/projects" ? "text-blue-400" : ""}
      >Projects</a
    >
    <a href="https://github.com/f1-surya/portfolio">Source</a>
  </div>
</main>
