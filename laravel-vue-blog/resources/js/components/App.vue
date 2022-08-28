<template>
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <router-link to="/" class="nav-link px-2 link-secondary">Home</router-link>
            <router-link to="/blogs" class="nav-link px-2 link-dark">Blogs</router-link>
            <router-link to="/contact" class="nav-link px-2 link-dark">Contact</router-link>
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