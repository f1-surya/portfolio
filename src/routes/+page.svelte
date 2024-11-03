<script>
  import Link from "$lib/components/Link.svelte";
  export const cst = false;
</script>

<svelte:head>
  <title>Balasurya Ganesamoorthi</title>
  <meta name="description" content="Surya's portfolio" />
</svelte:head>

<div class="flex flex-col md:flex-row items-center md:items-start mt-4 gap-4">
  <img src="MyPic.jpeg" alt="me" class="w-24 h-24 rounded-full" />
  <div class="flex flex-col justify-center h-24">
    <h1 class="text-3xl font-bold">Balasurya Ganesamoorthi</h1>
    <i class="text-xl"> I love cars and I like to code. </i>
    <div class="flex flex-row gap-3 justify-center items-center mt-2">
      <Link src="github.svg" url="https://github.com/f1-surya" />
      <Link
        src="linkedin.svg"
        url="https://www.linkedin.com/in/balasurya-ganesamoorthi/"
      />
      <Link src="twitter.svg" url="https://x.com/f1_surya" />
      <Link src="instagram.svg" url="https://instagram.com/f1_surya" />
      <Link src="leetcode.svg" url="https://leetcode.com/f1-surya" />
    </div>
  </div>
</div>
<h2 class="text-xl font-bold mt-4 self-start">About Me:</h2>
<p class="text-md text-start self-start">
  I am a Software Developer from Tamilnadu, India. I have been working with web
  technologies for the past 2 years. I am also a big fan of cars and I love
  racing <i>(mainly Formula 1)</i>.
</p>
<h2 class="text-xl font-bold mt-4 self-start">Skills:</h2>
<p class="self-start text-start">
  I worked with the <b>MERN</b> stack and <b>Flutter</b> at a professional
  level. I know Java, Python, Kotlin, Dart and Typescript programming languages.
  I&apos;ve been daily driving
  <b>Linux</b>
  based operating systems for the past 2 years. I also know <b>Docker</b> and
  <b>Nginx</b>. I&apos;ve deployed multiple apps to <b>GCP</b> using the previously
  mentioned technologies.
</p>
<h2 class="text-xl font-bold mt-4 self-start">Experience:</h2>
<p class="self-start text-start">
  I worked as a Fullstack Developer at <a
    href="https://last2braincells.com"
    class="text-blue-400"
    target="_blank"
  >
    Last 2 Brain Cells</a
  > for a year. And now I am working at <a
    href="https://app.gester.in"
    class="text-blue-400"
    target="_blank"
  >
    Gester</a>.
</p>
<h2 class="text-xl font-bold mt-4 self-start">Interests:</h2>
<p class="self-start text-start">
  I love european sports cars like <i>Porsche</i>, <i>Koenigsegg</i> and
  <i>Lamborghini</i>. I like v10 engines and manual transmissions. I'm a huge
  fan of <i>Formula 1</i>, so if anybody brings it up, I will not stop talking
  about it.
  <br />
  <br />
  I admire open source software and I'm a big fan of <i>Linux</i>.
  <br />
  <br />
  I like the <i>Tolkien Legendarium</i>. But I'm only half way through the
  books.
  <br />
  <br />
  I also like to play <i>Minecraft</i>.
</p>
