<script setup lang="ts">
// import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>

<template>
  <nav>
    <h1 class="flex text-xl">
      TIK TAK
    </h1>
    <ul>
      <li class="flex p-0 justify-around">
        <router-link class="text-red-600" to="/index">;
          <code class="font-mono">Accueil</code>
        </router-link>
      </li>
      <li class="flex p-0 justify-around">
        <router-link class="text-red-600" to="/PersoView">
          <code class="font-mono">Personnalisation</code>
        </router-link>
      </li>
      <li class="flex p-0 justify-around">
        <router-link class="text-red-600" to="/ListeView">
          <code class="font-mono">Liste</code>
        </router-link>
      </li>
      <li class="flex p-0 justify-around">
        <router-link class="text-red-600" to="/CompteView">
          <code class="font-bolt">Compte</code>
        </router-link>
      </li>
    </ul>
  </nav>
  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>

</template>


