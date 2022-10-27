<script setup lang="ts">
import MontreDessus from "@/components/MontreDessus.vue"
import FormMontreVue from "@/components/FormMontre.vue";


import { colors, materiaux } from "@/types";
//import type { Montre } from "@/types";
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
//import FormKitListColors from "./FormKitListColors.vue";

const router = useRouter();
const montre = ref({});

const props = defineProps(["id"]);
if (props.id) {
    // On charge les données de la montre
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("id_montre", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table montre :", error);
    else montre.value = data[0];
}
async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push("/listes");
    }
}
</script>


<template>
    <div>
        <FormMontreVue></FormMontreVue>
    </div>
</template>