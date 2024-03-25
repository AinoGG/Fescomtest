<template>
    <div class="login">
        <form action="login" class="login-form">
            <input type="text" placeholder="username" v-model="store.userForm">
            <input type="password" placeholder="password" v-model="store.passForm">
            <button @click.prevent="clickSubmit" type="submit">SUBMIT</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'


const store = useAuthStore()





function clickSubmit() {
    store.login(store.userForm, store.passForm)    
}


</script>

<style lang="scss">
.login-form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
        height: 32px;
        background: #f3f3f3;
        padding: 0px 10px;
        border: none;
    }

    button {
        height: 32px;
        background: #f3f3f3;
        border-radius: 8px;
        border: none;
        font-weight: 700;
        transition: all .3s ease-in-out;
        cursor: pointer;

        &:hover {
            background: #e69c9c;
            color: #fff;
        }
    }
}
</style>