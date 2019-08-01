<template>
  <Table :columns="columns" :data="tabledata">
    <template slot-scope="{ row, index }" slot="name">
      <Input type="text" v-model="editName" v-if="editIndex === index" />
      <span v-else>{{ row.name }}</span>
    </template>

    <template slot-scope="{ row, index }" slot="age">
      <Input type="text" v-model="editAge" v-if="editIndex === index" />
      <span v-else>{{ row.age }}</span>
    </template>

    <template slot-scope="{ row, index }" slot="sex">
      <Input type="text" v-model="editSex" v-if="editIndex === index" />
      <span v-else>{{ row.sex }}</span>
    </template>

    <template slot-scope="{ row, index }" slot="major">
      <Input type="text" v-model="ediMajor" v-if="editIndex === index" />
      <span v-else>{{ (row.major) }}</span>
    </template>

    <template slot-scope="{ row, index }" slot="address">
      <Input type="text" v-model="editAddress" v-if="editIndex === index" />
      <span v-else>{{ row.address }}</span>
      <!-- //getBirthday -->
    </template>

    <template slot-scope="{ row, index }" slot="action">
      <div v-if="editIndex === index">
        <Button @click="handleSave(index)">保存</Button>
        <Button @click="editIndex = -1">取消</Button>
      </div>
      <div v-else>
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="handleEdit(row,index)"
        >编辑</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </div>
    </template>
  </Table>
</template>
<script>
//columns 表头
export default {
  data() {
    return {
      columns: [
        {
          title: "姓名",
          slot: "name"
        },
        {
          title: "年龄",
          slot: "age"
        },
        {
          title: "性别",
          slot: "sex"
        },
        {
          title: "专业",
          slot: "major"
        },
        {
          title: "学号",
          slot: "address"
        },
        {
          title: "操作",
          slot: "action"
        }
      ],
      tabledata: [
        //表格对应的数据
        {
          name: "王小明",
          age: 18,
          sex: "男",
          major: "WEB",
          address: "919526400000"
        },
        {
          name: "张小刚",
          age: 25,
          sex: "男",
          major: "视觉",
          address: "696096000000"
        },
        {
          name: "李小红",
          age: 30,
          sex: "女",
          major: "WEB",
          address: "563472000000"
        },
        {
          name: "周小伟",
          age: 26,
          sex: "男",
          major: "视觉",
          address: "687024000000"
        }
      ],
      editIndex: -1, // 当前聚焦的输入框的行数
      editName: "", // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editAge: "", // 第二列输入框
      editSex: "", // 第三列输入框
      ediMajor: "", // 第四列输入框
      editAddress: "" // 第五列输入框
    };
  },
  created () {
    // console.log(this.$route.query.objinput)
    // 添加
    if(typeof this.$route.query.detail === 'object'){
      console.log(this.$route.query.detail)
       this.tabledata.push(this.$route.query.detail)
    }
  },
  methods: {
    handleEdit(row, index) {
      this.editName = row.name;
      this.editAge = row.age;
      this.editSex = row.sex;
      this.editAddress = row.address;
      this.ediMajor = row.major;
      this.editIndex = index;
    },
    handleSave(index) {
      this.tabledata[index].name = this.editName;
      this.tabledata[index].age = this.editAge;
      this.tabledata[index].sex = this.editSex;
      this.tabledata[index].major = this.ediMajor;
      this.tabledata[index].address = this.editAddress;
      this.editIndex = -1;
    },
    // getBirthday(major) {
    //   const date = new Date(parseInt(major));
    //   const year = date.getFullYear();
    //   const month = date.getMonth() + 1;
    //   const day = date.getDate();
    //   return `${year}-${month}-${day}`;
    // },
    remove(index) {
      this.tabledata.splice(index, 1);
    }
  }
};
</script>