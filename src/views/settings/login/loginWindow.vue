<template>
    <login-window v-model="show.login"></login-window>
</template>

<script>
    import loginWindow from './login';

    export default{
        components:{
            loginWindow
        },
        data(){
            return{
                show: {
                    initDS: false,
                    addDS: false,
                    login: false
                }
            }
        },
        
    }
</script>

<style lang="scss">

</style>