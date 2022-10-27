<script setup lang="ts">

import type { Montre } from "@/types";
import { colors } from "@/types";
import { ref } from 'vue';
import MontreDessusVue from "./MontreDessus.vue";
import FormKitListColors from "./FormKitListColors.vue";



const montre = ref<Montre>({});

const props = defineProps<{
    data?: Montre;
    id?: string;
}>();


// @ts-ignore
async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("Montre-Connectée").upsert(dataForm);
    if (error || !data) {
        node.setErrors([error?.message]);
    }
    else {
        node.setErrors([]);
        router.push('/');
    }
};

</script>

<template>
    <div class="p-2">

        <h2>Personnalisation</h2>
        <ul class="flex gap-1">
            <li><a href="#profil">Profil</a></li>
            <li><a href="#dessus">Dessus</a></li>
        </ul>
        <div class="carousel w-64">
            <MontreProfil class="carousel-item w-64" v-bind="montre" id="profil" />
            <MontreDessusVue class="carousel-item w-64" v-bind="montre" id="dessus" />
        </div>

        <FormKit type="form" v-model="montre" @submit="upsertMontre">
            <FormKitListColors name="bracelet" label="Bracelet"></FormKitListColors>
            <FormKitListColors name="cadrant" label="Bracelet"></FormKitListColors>
            <FormKitListColors name="ecran" label="Bracelet"></FormKitListColors>
        </FormKit>
    </div>
</template>
