<template>
  <div id="abroad">
    <h1>创建列表</h1>
    <div class="input-a">
      姓名：
      <input type="text" v-model="name" placeholder="name" />
    </div>
    <div class="input-a">
      年龄：
      <input type="text" v-model="age" placeholder="age" />
    </div>
    <div class="input-a">
      性别：
      <input type="text" v-model="sex" placeholder="sex" />
    </div>
    <div class="input-a">
      专业：
      <input type="text" v-model="major" placeholder="major" />
    </div>
    <div class="input-a">
      学号：
      <input type="text" v-model="address" placeholder="address" />
    </div>
    <div class="addto">
      <input type="button" value="添加列表" @click="addtovalue" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      sex: "",
      major: "",
      address: ""
    };
  },
  methods: {
    addtovalue() {
      let objinput = {
        name: this.name,
        age: this.age,
        sex: this.sex,
        major: this.major,
        address: this.address
      };
      for(var item in objinput){  
         if(this[item] == ""){
        alert('请输入信息，不能为空')
        return;
      }
      }
      this.$router.push({
        path: "/classes/classlist",
        query: { detail: objinput }
      });
    }
  }
};
</script>


<style scoped>
#abroad {
  position: absolute;
  left: 35%;
  top: 35%;
}
.input-a {
  margin: 10px;
}
.input-a input {
  width: 250px;
  padding: 7px 23px;
}
.addto input {
  background: green;
  font-size: 18px;
  color: #fff;
  float: right;
  margin-right: 10px;
}
</style>
