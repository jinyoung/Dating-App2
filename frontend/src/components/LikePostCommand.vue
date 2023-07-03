<template>
    <v-card outlined>
        <v-card-title>
            LikePost
        </v-card-title>

        <v-card-text>
            <User offline label="User" v-model="value.user" :editMode="editMode" @change="change"/>
            <Post offline label="Post" v-model="value.post" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="likePost"
            >
                LikePost
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'LikePostCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.user = {};
            this.value.post = {};
        },
        watch: {
        },
        methods: {
            likePost() {
                this.$emit('likePost', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

