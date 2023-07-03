<template>
    <v-card outlined>
        <v-card-title>
            UpdateProfile
        </v-card-title>

        <v-card-text>
            <User offline label="User" v-model="value.user" :editMode="editMode" @change="change"/>
            <String label="DatingStatus" v-model="value.datingStatus" :editMode="editMode"/>
            <String label="RelationshipGoal" v-model="value.relationshipGoal" :editMode="editMode"/>
            <String label="Interests" v-model="value.interests" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="updateProfile"
            >
                UpdateProfile
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
        name: 'UpdateProfileCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.user = {};
            this.value.datingStatus = '';
            this.value.relationshipGoal = '';
            this.value.interests = '';
        },
        watch: {
        },
        methods: {
            updateProfile() {
                this.$emit('updateProfile', this.value);
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

