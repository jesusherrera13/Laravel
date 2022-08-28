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
                content: null
            }
        }
    },
    methods: {
        async save() {
            let response = await axios.post(`${process.env.MIX_API_URL}/api/blog`, this.blog);
            if(response.status == 201) router.push('/blogs');
        }
    }
}
</script>