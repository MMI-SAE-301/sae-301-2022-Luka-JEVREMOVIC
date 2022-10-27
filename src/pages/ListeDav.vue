<script setup lang="ts">
import MontreDessus from "../components/MontreDessus.vue";
import type { Montre } from "@/types";
const exemples: Montre[] = [{
    ecran: "#FF0000",
    cadrant: "#FFFFFF",
    bracelet: "#FFB203",
},
{
    ecran: "#FF0000",
    cadrant: "#FFFFFF",
    bracelet: "#FFB203",
}];
</script>
<template>
    <section>
        <h1 class="text-2xl">Exemples de Montre</h1>
        <div class="flex flex-wrap gap-2">
            <div class="w-64" v-for="x in exemples" :key="x.bracelet">
                <RouterLink :to="{ name: 'montre-exemple-data', params: { data: JSON.stringify(x) }, }" />
                <MontreDessus class="w-64" v-bind="x" />
            </div>
        </div>
    </section>
</template>