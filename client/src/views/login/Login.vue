<template>
  <div class="login h-100vh d-flex flex-align-center flex-justify-center">
    <FormulateForm class="login-form p-20 box-shadow"  v-slot="{ hasErrors }" @submit="login">
            <FormulateInput  validation="required|email" validation-message="Email is required" v-model="loginData.email" type="email" label="Email" name="email" />
            <FormulateInput  :disabled="hasErrors" type="submit" label="Login" />
        </FormulateForm>
  </div>
</template>

<script>
export default {
name:"Login",
data(){
  return {
    loginData:{
      name:"",
      password:""
    }
  }
},
methods:{
    login(){
        this.$router.push({path:'/projects'})
    }
}
}
</script>

<style scoped >
.login-form {
  width: 300px;
}

</style>