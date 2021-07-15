<template>
  <div>
    <div>
      <h2>登录</h2>
    </div>
    <div>
      <input type="text" placeholder="请输入用户名" v-model="user.phone" />
    </div>
    <div>
      <input type="text" placeholder="请输入密码" v-model="user.password" />
    </div>
    <div>
      <button @click="send">发送验证码</button>
    </div>
    <div>
      <input type="text" placeholder="请输入验证码" v-model="code" />
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import { reqPhone, reqCaptcha, reqVerify } from "@/util/request";
export default {
  data() {
    return {
      user:{
        phone:" ",
        password: " ",
      },
      code: "",
    };
  },
  methods: {
    send(){
      reqPhone(this.user).then(res => {
        reqCaptcha({phone:this.user.phone}).then(res => {
          alert("发送验证码成功")
        })
      }).catch(err => {
        alert("账号或密码错误")
      })
    },
    login(){
      reqVerify({phone:this.user.phone,captcha:this.code}).then(res =>{
        this.$router.push("/index")
      }).catch(err => {
        alert("验证码错误")
      })
    }
  },
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';

h2 {
  font-size: $h2;
  margin: $margin 0;
  text-align: center;
}
</style>