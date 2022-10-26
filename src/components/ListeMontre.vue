<script setup lang="ts">
import { supabase } from "@/supabase";
import MontreProfil from "./MontreProfil.vue";

const props = defineProps<{
    max?: number;
}>();

let { data: Montre, error } = await supabase
    .from("Montre")
    .select("*")
    .limit(props.max ?? 100)

if (error) {
    console.log("erreur données Basket", { error });
}
</script>

<template>
    <ul>
        <li v-for="montre in Montre" :key="montre.id_montre">
            <router-link :to="{ name: 'basket-edit-id', params: { id: montre.id_chaussure } }">
                <MontreProfil class="w-64" v-bind="montre" />
            </router-link>
        </li>
    </ul>
</template>