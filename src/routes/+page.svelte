<script>
  import Link from "./Link.svelte";
</script>

<div class="w-[90%] p-4 md:w-[40%] m-auto flex flex-col">
  <div class="flex flex-row items-start mt-4 gap-4">
    <img src="MyPic.jpeg" alt="me" class="w-24 h-24 rounded-full" />
    <div class="flex flex-col justify-center h-24">

      <h1 class="text-3xl font-bold">Balasurya Ganesamoorthi</h1>
      <i class="text-xl">
        I love cars and I like to code.
      </i>
    </div>
  </div>
  <h2 class="text-xl font-bold mt-4 self-start">About Me:</h2>
  <p class="text-md text-start self-start">
    I am a Software Developer from Tamilnadu, India. I had to drop out of high school due to some personal reasons and
    I've been learning to code since then. I have been working with
    web technologies for the past 2 years. I am also a big fan of cars and I love racing <i>(mainly Formula 1)</i>.
  </p>
  <h2 class="text-xl font-bold mt-4 self-start">Skills:</h2>
  <p class="self-start text-start">
    I worked with the <b>MERN</b> stack and <b>Flutter</b> at a professional level. I know Java, Python, Kotlin, Dart
    and Typescript programming languages. I&apos;ve been daily driving Linux
    based operating systems for the past 2 years. I also know <b>Docker</b> and <b>Nginx</b>. I&apos;ve deployed
    multiple apps to <b>GCP</b> using the previously mentioned technologies.
  </p>
  <h2 class="text-xl font-bold mt-4 self-start">Experience:</h2>
  <p class="self-start text-start">
    I worked as a Fullstack Developer at <a href="https://last2braincells.com" class="text-blue-400" target="_blank">Last
    2 Brain Cells</a> for a year.
  </p>
  <div class="bg-[#010221] mt-16 p-4">
    <div class="grid grid-cols-2 gap-2 grid-rows-3">
      <Link src="github.svg" name="Github" url="https://github.com/f1-surya" />
      <Link src="linkedin.svg" name="LinkedIn" url="https://www.linkedin.com/in/balasurya-ganesamoorthi/" />
      <Link src="twitter.svg" name="Twitter" url="https://x.com/f1_surya" />
      <Link src="instagram.svg" name="Instagram" url="https://instagram.com/f1_surya" />
      <Link src="leetcode.svg" name="Leetcode" url="https://leetcode.com/f1-surya" />
    </div>
    <div class="flex flex-row gap-4 self-center w-full  justify-center ">
      <a href="/blogs">Blogs</a>
      <a href="/projects">Projects</a>
      <a href="https://github.com/f1-surya/portfolio">Source</a>
    </div>
  </div>
</div>
