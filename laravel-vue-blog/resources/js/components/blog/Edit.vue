<template>
    <div class="row">
        <div class="col-12">
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
                    <input type="submit" class="btn btn-primary" value="Save">
                    <button class="btn btn-warning" @click="this.$router.push('/blogs')">Cancel</button>
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
            }
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
                    });
        }
    }
}
</script>