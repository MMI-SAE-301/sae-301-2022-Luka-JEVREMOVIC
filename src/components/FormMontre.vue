<script setup lang="ts">

import type { Montre } from "@/types";
import { colors } from "@/types";
import { ref } from 'vue';
import MontreDessusVue from "./MontreDessus.vue";



const montre = ref<Montre>({});


</script>

<template>
    <div class="p-2">

        <p>pnokbiob</p>
        <ul class="flex gap-1">
            <li><a href="#profil">Profil</a></li>
            <li><a href="#dessus">Dessus</a></li>
        </ul>
        <div class="carousel w-64">
            <MontreProfil class="carousel-item w-64" v-bind="montre" id="profil" />
            <MontreDessusVue class="carousel-item w-64" v-bind="montre" id="dessus" />
        </div>

        <FormKit type="form" v-model="montre">
            <FormKit name="bracelet" label="bracelet" value="#FFFFFF" type="radio" :options="colors"></FormKit>
            <FormKit name="ecran" label="bracelet" value="#FFFFFF" type="radio" :options="colors"></FormKit>
            <FormKit name="cadrant" label="bracelet" value="#FFFFFF" type="radio" :options="colors"></FormKit>
        </FormKit>
    </div>
</template>
