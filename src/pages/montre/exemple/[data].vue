
<script setup lang="ts">
import FormMontreVue from "../../../components/FormMontre.vue";
defineProps<{
    data: string;
}>();
</script>
<template>
    <FormMontreVue :data="JSON.parse(data)" />
</template>