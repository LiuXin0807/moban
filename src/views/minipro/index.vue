<template>
  <div class="app-container">
    <el-steps :active='isactive' simple>
      <el-step title="步骤 1" icon="el-icon-edit"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      <el-step title="步骤 4" icon="el-icon-picture"></el-step>
    </el-steps>
    <el-card shadow="hover">
      <template v-if="isactive===1">
        <div>
          <img style="display: block;margin: 0 auto" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=683514742,899942445&fm=27&gp=0.jpg" alt="">
        </div>

      </template>
      <template v-if="isactive===2">
        <div>
          <el-form style="width: 500px;" label-position="left" label-width="150px" :model="step2">
            <el-form-item label="品牌信息">

            </el-form-item>
            <el-form-item label="名称">
              <el-input v-model="step2.name"></el-input>
            </el-form-item>
            <el-form-item label="小程序appid">
              <div>123123</div>
            </el-form-item>
            <el-form-item label="小程序主体名称">
              <div>123123</div>
            </el-form-item>
            <el-form-item label="图标上传">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="品牌介绍">
              <el-input type="textarea" v-model="step2.desc"></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="step2.name"></el-input>
            </el-form-item>
            <el-form-item label="客服电话">
              <el-input v-model="step2.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </template>
      <template v-if="isactive===3">
        <div>模板</div>
      </template>
      <template v-if="isactive===4">
        <div>模板 </div>
      </template>
    </el-card>

    <div style="text-align: center;margin-top: 20px">
      <el-button type="primary" @click="nextStep">下一步</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isactive:1,
        step2:{
          name:'',
          desc:''
        }
      }
    },
    methods: {
      nextStep(){
        this.isactive++
      }
    }
  }
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>

