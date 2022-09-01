<template>
    <div class="container">
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link :to="{name:'home'}"  class="nav-link active" aria-current="page">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name:'todos'}" class="nav-link">Todos</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'categories'}" class="nav-link">Categories</router-link>
                </li>
                <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            </ul>
        </header>
    </div>
    <main class="container">
        <router-view></router-view>
    </main>
</template>
<script>
    export default {}
</script>