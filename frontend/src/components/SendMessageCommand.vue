<template>
    <v-card outlined>
        <v-card-title>
            SendMessage
        </v-card-title>

        <v-card-text>
            <User offline label="Sender" v-model="value.sender" :editMode="editMode" @change="change"/>
            <User offline label="Recipient" v-model="value.recipient" :editMode="editMode" @change="change"/>
            <String label="Message" v-model="value.message" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="sendMessage"
            >
                SendMessage
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
        name: 'SendMessageCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.sender = {};
            this.value.recipient = {};
            this.value.message = '';
        },
        watch: {
        },
        methods: {
            sendMessage() {
                this.$emit('sendMessage', this.value);
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

