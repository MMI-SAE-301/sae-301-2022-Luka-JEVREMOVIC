<script setup lang="ts">

import type { Montre } from "@/types";
import { supabase } from "@/supabase";
import { ref } from 'vue';
import MontreDessusVue from "./MontreDessus.vue";
import FormKitListColors from "./FormKitListColors.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const montre = ref<Montre>({});



const props = defineProps(["id"]);
if (props.id) {
    // On charge les données de la montre
    let { data, error } = await supabase.from("montre")
        .select("*")
        .eq("id_montre", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table montre :", error);
    else montre.value = data[0];
}

// @ts-ignore
async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error || !data) {
        node.setErrors([error?.message]);
    }
    else {
        node.setErrors([]);
        router.push('/listes');
    }
};

</script>

<template>
    <div class="p-2">

        <h2 class="text-center text-2xl">Personnalisation</h2>
        <ul>
            <li class="flex gap-1 bg-white border-2 text-black rounded-xs hover:bg-black hover:text-white p-2"><a
                    href="#profil">Profil</a></li>
            <li class="flex gap-1 bg-white border-2 text-black rounded-xs hover:bg-black hover:text-white p-2"><a
                    href="#dessus">Dessus</a></li>
        </ul>
        <div class="carousel w-64">
            <MontreProfil class="carousel-item w-64" v-bind="montre" id="profil" />
            <MontreDessusVue class="carousel-item w-64" v-bind="montre" id="dessus" />
        </div>

        <div class="grid grid-flow-row-dense grid-cols-2">
            <FormKit type="form" v-model="montre" @submit="upsertMontre" :submit-attrs="{
                classes: {
                    input:
                        'bg-white font-bahnsrift border-2 text-black rounded-xl hover:bg-black hover:text-white p-2',
                },
            }">
                <FormKitListColors name="bracelet" label="Bracelet"></FormKitListColors>
                <hr>
                <FormKitListColors name="cadrant" label="Cadrant"></FormKitListColors>
                <hr>
                <FormKitListColors name="ecran" label="Ecran"></FormKitListColors>

            </FormKit>
        </div>
    </div>
</template>
