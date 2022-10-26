<script setup lang="ts">
import FormMontre from "../../../components/FormMontre.vue";
defineProps({ id: String });
</script>

<template>
    <div class="border-0">
        <FormMontre :id="id" />
    </div>
</template>