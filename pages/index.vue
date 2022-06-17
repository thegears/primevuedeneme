<template>
    <div class="grid w-full justify-content-center">
        <Button @click="changeTheme" label="Change Theme" class="col-5 p-button-danger border-noround" />
    </div>
</template>
<script setup>
import Button from 'primevue/button';

let { changeTheme } = defineProps({
    changeTheme: Function
});
</script>