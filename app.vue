<template>
    <Html>

    <Body>
        <NuxtLayout>
            <NuxtPage :changeTheme="changeTheme"/>
        </NuxtLayout>
    </Body>

    </Html>
</template>
<script setup>
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    var element = document.createElement("link");
    element.setAttribute("id", "theme-link")
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");

    if (localStorage.getItem("theme") && localStorage.getItem("theme") == "dark") {
        element.setAttribute("href", "/dark.css");
        document.querySelector("body").classList.add("darkTheme");
    } else {
        element.setAttribute("href", "/light.css");
    };

    document.getElementsByTagName("head")[0].appendChild(element);
});


function changeTheme(){
    let theme = localStorage.getItem("theme") || "light";

    if(theme == "dark"){
        localStorage.setItem("theme","light");
        document.querySelector("#theme-link").href = "/light.css";
        document.querySelector("body").classList.remove("darkTheme");
    }else {
        document.querySelector("#theme-link").href = "/dark.css";
        localStorage.setItem("theme","dark");
        document.querySelector("body").classList.add("darkTheme");
    };
};
</script>
<style>
.darkTheme {
    background-color: #111;
};
</style>