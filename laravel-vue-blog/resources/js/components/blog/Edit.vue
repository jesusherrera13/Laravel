<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-danger" role="alert" v-if="errors.length">
                <ul>
                    <li v-for="error in errors">
                        {{error}}
                    </li>
                </ul>
            </div>
            <form @submit.prevent="save">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" v-model="blog.title">
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Content</label>
                    <textarea class="form-control" id="content" rows="3" v-model="blog.content"></textarea>
                </div>
                 <div class="mb-3">
                    <button class="btn btn-primary" value="Save">
                        <font-awesome-icon icon="fa-solid fa-floppy-disk"></font-awesome-icon>
                    </button>
                    <button class="btn btn-warning" @click="this.$router.push('/blogs')">
                        <font-awesome-icon icon="fa-solid fa-arrow-left"></font-awesome-icon>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import router from '../../routes';

export default {
    data() {
        return {
            blog: {
                title: null,
                content: null,
            },
            errors: []
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            await axios.get(`${process.env.MIX_APP_URL}/api/blog/${this.$route.params.id}`)
                    .then(response => {
                        this.blog = response.data;
                    });
        },
        async save() {
            await axios.put(`${process.env.MIX_APP_URL}/api/blog/${this.$route.params.id}`, this.blog)
                    .then((response) => {
                        if(response.status == 204) router.push('/blogs');
                    })
                    .catch(error => {
                        Object.keys(error.response.data.errors).forEach((o) => {
                            this.errors.push(error.response.data.errors[o][0])
                        });
                    });
        }
    }
}
</script>