<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>

<template>

  <body>
    <header>
      <div class="bg-gray-800 sm:flex-end sm:items-center sm:justify-between">
        <nav>
          <h1 class="flex text-white text-xl">
            TIK TAK
          </h1>
          <ul>
            <li class="flex p-0 justify-around">
              <router-link
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline"
                to="/">
                <code class="font-mono">Accueil</code>
              </router-link>
            </li>
            <li class="flex p-0 justify-around">
              <router-link
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline"
                to="/Personnalisation">
                <code class="font-mono">Personnalisation</code>
              </router-link>
            </li>
            <li class="flex p-0 justify-around">
              <router-link
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline"
                to="/Liste">
                <code class="font-mono">Liste</code>
              </router-link>
            </li>
            <li class="flex p-0 justify-around">
              <router-link
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline"
                to="/Compte">
                <code class="font-bolt">Compte</code>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-2 border-2 p-2" />
    </Suspense>


    <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-black">
      <div class="sm:flex sm:items-center sm:justify-between">
        <RouterLink to="/" class="flex items-center mb-4 sm:mb-0">
          <img src="" class="mr-3 h-8" alt="" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TIK TAK</span>
        </RouterLink>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com/"
          class="hover:underline"></a>Exercice réalisé dans le cadre d'un exercice pédagogique au
        département MMI de Montbéliard
      </span>
    </footer>
  </body>
</template> 

