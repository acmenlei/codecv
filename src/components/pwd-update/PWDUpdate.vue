<script setup lang="ts">
import { useSubmit } from './hook'
const emits = defineEmits(['cancel'])

const { form, imgSrc, cancel, submit, genCode } = useSubmit(emits)
</script>

<template>
  <div class="pwd-update">
    <h3>密码修改</h3>
    <input type="password" placeholder="原密码" v-model="form.oPassword" maxLength="16" />
    <input type="password" placeholder="新密码" v-model="form.nPassword" maxLength="16" />
    <input type="text" placeholder="验证码" v-model="form.verify" maxLength="4" />
    <img :src="imgSrc" alt="验证码" @click="genCode" />
    <div class="btn-group">
      <button class="btn primary" @click="submit">提交</button>
      <button class="btn plain" @click="cancel">取消</button>
    </div>
  </div>
  <p class="mt-20 tip">ps: 请保存好密码 切勿外传</p>
</template>

<style lang="scss" scoped>
.pwd-update {
  display: flex;
  flex-direction: column;

  input {
    border: 0.5px solid transparent;
    outline: none;
    background: #eee;
    border-radius: 8px;
    padding: 10px;
    margin-top: 10px;

    &:focus {
      border: 0.5px solid var(--theme);
    }
  }
  img {
    width: 150px;
    margin-top: 10px;
    cursor: pointer;
  }
  .btn-group {
    margin-top: 10px;
    text-align: left;
  }
}
.tip {
  color: #999;
  font-size: 0.8rem;
  user-select: none;
}
</style>
