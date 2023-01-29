/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderSlot } from '../astro.51d60158.mjs';
import 'html-escaper';

const $$Astro$8 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title = "The Professioals Window and Eaves cleaning Ltd",
    description = "My first Astro site",
    image = "/placeholder-social.jpg"
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">

<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/components/BaseHead.astro");

const $$Astro$7 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead($$result)}<header>
  <nav class="w-full top-0 bg-white z-10 dark:bg-slate-900">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex item-center gap-2">
        <img class="item-center w-40 h-28" src="/public/images/home/logo.png" alt="logo">
        <span class="hidden md:flex text-2xl font-bold text-indigo-900 py-8 dark:text-white">The Professionals.</span>
      </div>
      <ul class="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
        <li class="hover:text-blue-500">
          <a href="/">Home</a>
        </li>
        <li class="hover:text-blue-500">
          <a href="about">About</a>
        </li>
        <li class="hover:text-blue-500">
          <a href="blog">Blog</a>
        </li>
        <li class="hover:text-blue-500">
          <a href="projects">Projects</a>
        </li>
        <li class="hover:text-royal">
          <a href="#">Contact</a>
        </li>
      </ul>
      <img src="public/images/home/moon.png" class="hidden md:block w-5 cursor-pointer" alt="moon">
      <div id="hamburger" class="space-y-1 md:hidden cursor-pointer z-20">
        <div class="w-6 h-0.5 bg-black"></div>
        <div class="w-6 h-0.5 bg-black"></div>
        <div class="w-6 h-0.5 bg-black"></div>
      </div>
      <ul id="menu" class="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="blog">Blog</a>
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</header>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/components/NavBar.astro");

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en">
  <!--Main Head of Site -->

  ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}

  <!--NaveBar -->

  ${renderComponent($$result, "NavBar", $$NavBar, {})}

  ${maybeRenderHead($$result)}<body class="font:nunito bg-gray-800 min-h-screen flex flex-col">
    ${renderSlot($$result, $$slots["default"], renderTemplate` Default Text`)}
  </body></html>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/layouts/Layout.astro");

const $$Astro$5 = createAstro();
const $$HeroHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeroHome;
  return renderTemplate`${maybeRenderHead($$result)}<div>
  <!-- Section: Design Hero -->
  <section class="mb-16">
    <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
          background-position: 50%;
          background-image: url('public/images/home/toronto-window-cleaning-bg.webp');
          height: 500px;
        ">
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style="background-color: rgba(0, 0, 0, 0.75)">
        <div class="flex justify-center items-center h-full">
          <div class="text-center text-white px-6 md:px-12">
            <h3 class="text-xl pb-4">
              Quality Service • Value for your money • Affordable Price
            </h3>
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Rejuvenate the look of <br><span>your home today</span>
            </h1>
            <button type="button" class="inline-block px-7 py-3 border-2 border- text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/components/HeroHome.astro");

const $$Astro$4 = createAstro();
const $$Testimonals = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Testimonals;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mb-16 bg-gradient-to-tr bg-secondary p-4">
  <section class="mb-16 text-gray-800 text-center">
    <h2 class="text-3xl font-bold mb-12 uppercase">Our satisfied CLIENTS</h2>

    <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
      <div class="p-3 mb-12 md:mb-0">
        <div class="flex justify-center mb-6">
          <img src="public/images/home/anna.webp" class="rounded-full shadow-lg w-32 h-32" alt="women head image">
        </div>
        <h5 class="text-lg font-bold mb-4">Anna</h5>
        <h6 class="font-medium text-white mb-4">- Google</h6>
        <p class="mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>
          I would recommend The professional Window and Eaves Cleaners without any
          hesitation. They did a great job on my windows. They take their time and
          do a thorough job. They clean up after themselves and are responsive to
          customer input. Customer satisfaction is definitely first on their list.
          I would definitely continue to hire them for any work.
        </p>
        <ul class="flex justify-center mb-0">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
        </ul>
      </div>
      <div class="p-3 rounded-lg mb-12 md:mb-0">
        <div class="flex justify-center mb-6">
          <img src="public/images/home/angelina.webp" alt="women-2 head image" class="rounded-full shadow-lg w-32 h-32">
        </div>
        <h5 class="text-lg font-bold mb-4">Angelina</h5>
        <h6 class="font-medium text-blue-600 mb-4">- Bark</h6>
        <p class="mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
            </path>
          </svg>The service was great! Punctual, great work ethic, and fast!
          very reasonable prices.
        </p>
        <ul class="flex justify-center mb-0">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
        </ul>
      </div>
      <div class="mb-0">
        <div class="p-3 rounded-lg mb-12 md:mb-0">
          <div class="flex justify-center mb-6">
            <img src="public/images/home/doug.webp" class="rounded-full shadow-lg w-32 h-32" alt="man head image">
          </div>
          <h5 class="text-lg font-bold mb-4">Doug</h5>
          <h6 class="font-medium text-blue-600 mb-4">- Homestars</h6>
          <p class="mb-4">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
              </path>
            </svg>Did a fantastic job with both gutters and exterior windows,
            and very prompt service. It’s a large house, and they finished in a
            day. Great work.
          </p>
          <ul class="flex justify-center mb-0">
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                </path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                </path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                </path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                </path>
              </svg>
            </li>
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                </path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/components/Testimonals.astro");

const $$Astro$3 = createAstro();
const $$ServicesSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesSection;
  return renderTemplate`${maybeRenderHead($$result)}<div>
  <section class="mb-16 text-gray-800 text-center">
    <h3>HOW CAN WE HELP YOU TODAY?</h3>
    <h2 class="text-3xl text-white font-bold mb-20">Choose Your Service:</h2>

    <div class="grid lg:gap-x-12 lg:grid-cols-3">
      <div class="mb-12 lg:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="p-4 bg-[#3296FF] rounded-full shadow-lg inline-block -mt-8">
              <svg style="display: inline-block; vertical-align: middle; cursor: auto;" viewBox="0 0 24 24" height="50" width="50" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" style="cursor: auto;"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-semibold mb-4">Eavestrough Cleaning</h5>
            <p>
              Have you been noticing more leaves, dirt, and debris accumulating
              in your gutters? Maybe there’s a build-up of water that can’t seem
              to drain properly? Gutter cleaning is the perfect solution for
              clearing out all the mess and restoring your gutters to their
              former glory. Let our team take care of everything for you!
            </p>
          </div>
        </div>
      </div>

      <div class="mb-12 lg:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="p-4 bg-[#3296FF] rounded-full shadow-lg inline-block -mt-8">
              <svg style="display: inline-block; vertical-align: middle; cursor: auto;" viewBox="0 0 24 24" height="50" width="50" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" style="cursor: auto;"></path></svg>
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-semibold mb-4">Power Washing</h5>
            <p>
              Our pressure washing service is the perfect way to get your home
              clean and free of stains. With our experienced professionals,
              you’ll be able to get the job done quickly and efficiently,
              leaving your home looking its best. Combine eavestrough cleaning
              and a power wash to save. Contact us today to schedule a
              consultation!
            </p>
          </div>
        </div>
      </div>

      <div class="">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="p-4 bg-[#3296FF] rounded-full shadow-lg inline-block -mt-8">
              <svg style="display: inline-block; vertical-align: middle; cursor: auto;" viewBox="0 0 24 24" height="50" width="50" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" style="cursor: auto;"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-semibold mb-4">Window Cleaning</h5>
            <p>
              Looking for a reliable and affordable window cleaning service?
              Look no further than ours! We offer a wide range of services,
              including regular window cleaning and spring/fall window cleaning.
              We also offer special discounts for job referrals!. Give us a call
              today to schedule your free consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/components/home/ServicesSection.astro");

const $$Astro$2 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex-grow">
  <div class="container p-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800 text-center lg:text-left">
      <div class="px-6 py-12 md:px-12">
        <div class="grid lg:grid-cols-2 lg:gap-x-12 items-center">
          <div class="mb-12 lg:mb-0">
            <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
              <h2 class="my-12 text-5xl font-bold tracking-tight leading-tight">
                Are you ready to hire <br>
                <span class="text-[#3296FF]">The Professionals?</span>
              </h2>

              <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                <div class="mb-6">
                  <form class="" action="https://submit-form.com/a1kqloNd">
                    <div class="grid md:grid-cols-2 md:gap-6">
                      <div class="mb-6">
                        <label for="first name" class=""></label>
                        <input type="text" id="nameFirst" name="nameFirst" placeholder="First Name" required="" class="mb-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <label for="last name" class=""></label>
                        <input type="text" id="nameLast" name="nameLast" placeholder="Last Name" required="" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                      </div>
                    </div>

                    <label for="email" class=""></label>
                    <input type="email" id="email" name="email" placeholder="Email" required="" class="mb-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">

                    <label for="message"></label>
                    <textarea id="message" name="message" placeholder="Message" required="" class="mb-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>

                    <button class="btn btn-primary" type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="mr-14 mb-12 lg:mb-0">
            <img src="/public/images/home/gutter-cleaning-5.webp" class="w-full h-full rounded-lg sshadow-lg" alt="gutter cleaning image">
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
</div>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/components/ContactForm.astro");

const $$Astro$1 = createAstro();
const $$IntroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IntroSection;
  return renderTemplate`${maybeRenderHead($$result)}<section class="pt-6 mb-16 text-gray-800">
  <div class="container mx-auto xl:px-32 text-center lg:text-left">
    <div class="grid lg:grid-cols-2 items-center">
      <div class="mb-12 lg:mb-0">
        <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)">
          <h2 class="text-3xl font-bold mb-6 uppercase text-primary">
            Your search is over…
          </h2>
          <p class="text-xl text-neutral-500 mb-6 pb-2 lg:pb-0">
            Why settle with the amateurs, when you can call <br>
            <span class="text-primary">The Professionals.</span>
          </p>
          <div class="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
            <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                </path>
              </svg>
              Best team
            </p>

            <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                </path>
              </svg>
              Best quality
            </p>

            <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                </path>
              </svg>
              Best experience
            </p>
          </div>

          <p class="text-base-100 mb-0">
            Clean windows brighten up the home. Enjoy clarity when you look out
            your windows. It is not enough to hire a random window cleaning
            company. Our company strives for excellence and aims to satisfy all
            our customers. Quality work at a fair price is what we bring to our
            customers. Your home is your castle. Let us give it the royal
            treatment. Large window cleaning companies only care about cleaning
            your windows and moving on to the next house. We tailor our services
            to exactly what you need. The Professionals go above and beyond. So
            remember, when you want a job done right, call <span class="text-primary">The Professionals.</span>
          </p>
        </div>
      </div>

      <div>
        <img src="/src/images/home/toronto-window-cleaning_1.webp" class="w-full h-full rounded-lg shadow-lg" alt="before and after image">
      </div>
    </div>
  </div>
</section>`;
}, "E:/WebDev/the-professionals-window-cleaning/src/components/home/IntroSection.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Professionals Window and Eaves Cleaning Ltd." }, { "default": () => renderTemplate`${renderComponent($$result, "HeroHome", $$HeroHome, {})}${renderComponent($$result, "ServicesSection", $$ServicesSection, {})}` })}

${renderComponent($$result, "IntroSection", $$IntroSection, {})}

${renderComponent($$result, "Testimonals", $$Testimonals, {})}

${renderComponent($$result, "ContactForm", $$ContactForm, {})}`;
}, "E:/WebDev/the-professionals-window-cleaning/src/pages/index.astro");

const $$file = "E:/WebDev/the-professionals-window-cleaning/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
