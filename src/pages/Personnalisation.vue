<script setup lang="ts">
import FormKitListColors from '@/components/FormKitListColors.vue'
import MontreDessusVue from '@/components/MontreDessus.vue';
import MontreProfilVue from '@/components/MontreProfil.vue';
import FormMontre from '@/components/FormMontre.vue';


</script>

<template>
    <section>


        <button>14cm</button>
        <button>14cm</button>
        <div class="carousel w-64">
            <MontreDessusVue />
            <MontreProfilVue />
        </div>
    </section>
</template>