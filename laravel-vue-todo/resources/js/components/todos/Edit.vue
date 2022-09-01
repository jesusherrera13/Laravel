<template>
    <div class="container">
        <div class="alert alert-danger" role="alert" v-if="errors.length">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
        <form @submit.prevent="save">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" for="title" v-model="todo.title">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Content</label>
                <textarea class="form-control" id="content" rows="3" v-model="todo.content"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button class="btn btn-warning" @click="$router.push('/todos')">Cancel</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

    export default {
        data() {
            return {
                todo: {},
                errors: []
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            async getData() {
                await axios.get(`${import.meta.env.VITE_API_URL}/api/todo/${this.$route.params.id}`)
                        .then(response => {
                            this.todo = response.data;
                        })
            },
            async save() {
                await axios.put(`${import.meta.env.VITE_API_URL}/api/todo/${this.$route.params.id}`, this.todo)
                        .then(response => {
                            if(response.status == 200) this.$router.push('/todos')
                        })
                        .catch(error => {
                            error.response.errors.forEach(k => {
                                this.errors.push(error.response.errors[k][0]);
                            })
                        })
            }
        }
    }
</script>