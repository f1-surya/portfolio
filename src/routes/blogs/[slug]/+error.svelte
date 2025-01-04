<script>
  import { page } from "$app/state";
</script>

<div class="flex flex-col items-center justify-center gap-2">
  <h1 class="text-5xl">404</h1>
  <p class="text-xl">{page.error?.message}</p>
  <a href="/blogs" class="text-blue-400 hover:underline">Go to blogs list</a>
</div>
