<script>
  export let src;
  export let name;
  export let url;
</script>

<a class="flex flex-row gap-2 mb-2 justify-start items-center" href={url} target="_blank">
  <img src={src} alt="link" class="w-5 h-5" />
  <span class="text-gray-400">
    {name}
  </span>
</a>
