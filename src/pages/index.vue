<script setup lang="ts">
import MontreProfil from "@/components/MontreProfil.vue";
import MontreDessus from "@/components/MontreDessus.vue"
</script>

<template>
  <h6 class="text-3xl">"Créer votre montre"</h6>
  <p class="text-2xl">Quand vous libérez toute votre
    créativité, rien n’est impossible.
    Imaginez une montre qui vous resssemble grâce a notre service de personnalisation. Et ce en un click.</p>

  <router-link to="/Personnalisation"><button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Personnaliser</button>
  </router-link>

  <MontreProfil />

  <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">

  <h6 class="text-3xl">"Qu'est-ce que TIK TAK ?"</h6>
  <p class="text-2xl">TIK TAK c’est l’excellence
    franc-comtoise, créer a
    Besançon notre atelier a
    pour objectif de réaliser
    votre montre d’une qualité
    indéniable. C’est ça Tik Tak
    des produits de bonnes et
    une personnalisation faites
    pour vous.</p>

  <MontreDessus />

</template>