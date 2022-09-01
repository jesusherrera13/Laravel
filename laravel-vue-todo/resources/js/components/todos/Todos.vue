<template>
    <div class="row">
        <div class="col-12">
            <h1>Todos</h1>
            <button class="btn btn-primary" @click="this.$router.push('todo-create')">
                <font-awesome-icon icon="fa fa-circle-plus"></font-awesome-icon>
            </button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos">
                        <td>{{ todo.title }}</td>
                        <td>{{ todo.content }}</td>
                        <td>
                            <button class="btn btn-warning" @click="$router.push({name:'todo-edit',params:{id:todo.id}})">
                                <font-awesome-icon icon="fa fa-edit"></font-awesome-icon>
                            </button>
                            <button class="btn btn-danger">
                                <font-awesome-icon icon="fa fa-trash"></font-awesome-icon>
                            </button>
                        </td>
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
        },
        mounted() {
            this.getData();
        }, 
        methods: {
            async getData() {
                axios.get(`${import.meta.env.VITE_API_URL}/api/todo`)
                    .then(response => {
                        this.todos = response.data;
                    })
                    .catch(error => {

                    });
            }
        }
    }
</script>