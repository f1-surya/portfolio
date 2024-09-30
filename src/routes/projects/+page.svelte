<script>
  import Project from "$lib/components/Project.svelte";
</script>

<svelte:head>
  <title>Surya&apos;s Projects</title>
  <meta name="description" content="Surya's projects" />
</svelte:head>

<h1 class="text-3xl font-bold">Projects</h1>
<div class="flex flex-col gap-4 mt-4">
  <Project name="MyWordle"
           description="A wordle game app for Android. It is the first proper project I've worked on. I learned a lot about Android development. And implementing the words comparison algorithm was a fun challenge."
           link="https://github.com/f1-surya/my-wordle" stack={["Kotlin", "Android"]} />
  <Project name="SIFF"
           description="The app I worked at during my time at Last 2 Brain Cells. Wrote the mobile app in Flutter and web in React(Due to some performance concerns with Flutter web). It uses Firebase and Material UI."
           link="https://siff.app"
           stack={["Flutter", "Dart", "Firebase", "React", "Material UI"]} />
  <Project name="Task manager" description="A Full-stack task manager app written with NextJs. The data is persisted on MongoDB atlas. It uses UI components from ShadCN." link="https://task-manager-gules-one.vercel.app/" stack={["NextJs", "TailwindCSS", "MongoDB"]} />
  <Project name="ConvoChain"
           description="My implementation of Twitter. It was previously written in Python with Django but I'm re-writing it in Go with Postgres and Docker."
           link="https://github.com/f1-surya/ConvoChain-backend" stack={["Go", "Postgres", "Docker"]} />
  <Project name="My Portfolio" description="The site you're looking at." link="https://github.com/f1-surya/portfolio"
           stack={["Svelte", "SvelteKit", "TailwindCSS"]} />
</div>
