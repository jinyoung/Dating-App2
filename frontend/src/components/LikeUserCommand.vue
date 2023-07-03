<template>
    <v-card outlined>
        <v-card-title>
            LikeUser
        </v-card-title>

        <v-card-text>
            <User offline label="User" v-model="value.user" :editMode="editMode" @change="change"/>
            <User offline label="LikedUser" v-model="value.likedUser" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="likeUser"
            >
                LikeUser
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
        name: 'LikeUserCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.user = {};
            this.value.likedUser = {};
        },
        watch: {
        },
        methods: {
            likeUser() {
                this.$emit('likeUser', this.value);
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

