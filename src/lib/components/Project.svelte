<script lang="ts">
  export let name: string;
  export let description: string;
  export let link: string;
  export let stack: string[];
</script>

<a href={link} target="_blank" class="flex flex-col hover:bg-[#010321] gap-2 p-4 rounded-lg border-2 border-gray-700 hover:border-blue-400 transition hover:shadow-md shadow-cyan-500">
  <h2 class="text-xl font-bold">{name}</h2>
  <p class="text-md text-start dark:text-gray-300">{description}</p>
    <div class="flex flex-row gap-2 justify-start items-center mt-2 flex-wrap">
    {#each stack as tech}
      <div class="bg-gray-200 dark:bg-cyan-700 rounded-full py-1 px-2 text-xs">
        {tech}
      </div>
    {/each}
  </div>
</a>
