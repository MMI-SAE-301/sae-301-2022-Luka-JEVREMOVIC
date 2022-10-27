<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
import { supabase } from "@/supabase";



const props = defineProps<{
    max?: number;
}>();
const { data: montre, error } = await supabase
    .from("montre")
    .select("*")
    .limit(props.max ?? 100);
console.log('les données reçus :  ', montre)
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}

</script>
<template>
    <section>
        <h1 class="text-center text-2xl">Mes montres</h1>
        <div class="flex flex-wrap justify-between">
            <div class="w-64" v-for="x in montre" :key="x.id">
                <MontreProfil v-bind="x" />
            </div>
        </div>
    </section>
</template>