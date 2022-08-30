<template>
    <div>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'categories'}">Categories</router-link>
    </div>
    <router-view></router-view>
</template>
<script>
    export default {}
</script>