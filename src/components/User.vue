<template>
    <div id="User">
        <h2>Hola  <span> {{username}}, </span>  ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
            }
        },
        created: function() {
            this.username = this.$route.params.username
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    #User h2{
        font-size: 50px;
        color: #ffffff;
        margin-top: 10%;
    }
    #User span{
        color: rgb(220, 20, 20);
        font-weight: bold;
    }
</style>
