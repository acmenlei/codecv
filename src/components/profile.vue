<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import { userForm } from '@/layout/header/hook'
import { professionals } from '@/views/community/components/community-left/constant'
import { ImageUpload } from '@/utils/uploader'

const emits = defineEmits(['cancel', 'submit'])
const ruleFormRef = ref<FormInstance>(),
  uploadInput = ref()
const rules = reactive<FormRules>({
  nickName: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 1, max: 16, message: '1～16字', trigger: 'blur' }
  ],
  school: [
    { required: true, message: '请输入输入你所就读的院校', trigger: 'blur' },
    { min: 4, max: 20, message: '4～20字', trigger: 'blur' }
  ],
  sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
  professional: [{ required: true, message: '请选择意向岗位', trigger: 'blur' }],
  graduation: [{ required: true, message: '请选择毕业时间', trigger: 'blur' }],
  origin: [
    { required: true, message: '请输入你所在的地区', trigger: 'blur' },
    { max: 10, min: 2, message: '2～10字', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(valid => {
    if (valid) {
      emits('submit')
      console.log('submit!')
    }
  })
}

const uploadAvatar = async function () {
  const files = uploadInput.value.files as FileList
  const url = await ImageUpload(files[0])
  userForm.avatar = url
}
</script>
<template>
  <el-form ref="ruleFormRef" :model="userForm" :rules="rules" label-width="100px" status-icon>
    <el-form-item label-width="80px">
      <label for="user_avatar_upload">
        <img class="pointer" :src="userForm.avatar" alt="头像" />
      </label>
      <input
        type="file"
        ref="uploadInput"
        id="user_avatar_upload"
        accept=".png,.jpg,.jpeg,.gif,.webp"
        @change="uploadAvatar"
      />
    </el-form-item>
    <el-form-item label="性别" prop="sex" required>
      <el-radio-group v-model="userForm.sex">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="用户昵称" prop="nickName" required>
      <el-input class="input" v-model="userForm.nickName" placeholder="网上冲浪的昵称" />
    </el-form-item>
    <el-form-item label="毕业院校" prop="school" required>
      <el-input class="input" v-model="userForm.school" placeholder="你所就读的院校" />
    </el-form-item>
    <el-form-item label="意向岗位" prop="professional" required>
      <el-select v-model="userForm.professional" placeholder="选择你的意向岗位">
        <el-option v-for="(prof, idx) in professionals" :key="idx" :label="prof" :value="prof" />
      </el-select>
    </el-form-item>
    <el-form-item label="毕业时间" required prop="graduation">
      <el-date-picker v-model="userForm.graduation" type="year" placeholder="毕业时间" />
    </el-form-item>
    <el-form-item label="所在地区" prop="origin" required>
      <el-input class="input" v-model="userForm.origin" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交修改</el-button>
      <el-button @click="$emit('cancel')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
#user_avatar_upload {
  display: none;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.input {
  width: 190px;
}
</style>
