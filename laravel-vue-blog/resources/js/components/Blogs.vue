<template>
    <div class="row">
        <div class="col-12">
            <h1>Blogs</h1>
            <router-link :to="{name:'create'}" class="btn btn-primary">
                <font-awesome-icon icon="fa-solid fa-circle-plus" />
            </router-link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in blogs">
                        <td>{{ item.title }}</td>
                        <td>{{ item.content }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: item.id }}" class="btn btn-warning">
                                <font-awesome-icon icon="fa-solid fa-pencil" />
                            </router-link>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="toggle(item)">
                                <font-awesome-icon icon="fa-solid fa-trash-can" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Delete:</p>
                        <h3>{{ blog.title }}</h3>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="Click">Close</button>
                        <button type="button" class="btn btn-danger" @click="deleteBlog" v-if="del">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            blogs: [],
            blog: {},
            del: true
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            let response = await axios.get(`${process.env.MIX_APP_URL}/api/blog`);
            this.blogs = response.data;
        },
        toggle(blog) {
            this.blog = blog;
        },
        async deleteBlog() {
            this.del = false;
            await axios.delete(`${process.env.MIX_APP_URL}/api/blog/${this.blog.id}`)
                    .then(response => {
                        this.$refs.Click.click();
                        this.getData();
                        this.del = true;
                    });
        },
    }
}
</script>