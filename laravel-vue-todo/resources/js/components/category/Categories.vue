<template>
    <div class="row">
        <div class="col-12">
            <h1>Categories</h1>
            <router-link :to="{name: 'category-create'}" class="btn btn-primary">
                <font-awesome-icon icon="fa fa-circle-plus"></font-awesome-icon>
            </router-link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos">
                        <th scope="row">1</th>
                        <td>{{ todo.title }}</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                todos: []
            }
        }
    }
</script>