<template>
  <div class="main">
    <div class="partial">
      <p>
        规格信息(SKU)
        <span style="color:red; padding-left: 20px; font-size:8px;">请选好规格之后再进行规格信息输入</span>
      </p>
      <div v-for="(item, index) in specification" :key="index" class="partial">
        <span>商品规格：</span>
        <el-select
          v-model="item.value"
          value-key="typeName"
          placeholder="请选择"
          style="width: 50%;"
          :disabled="item.disabled"
          @change="handleSKUValueChange(item,index)"
        >
          <el-option
            v-for="(indexOfSKUList, i) in skuList"
            :key="i"
            :label="indexOfSKUList.typeName"
            :value="indexOfSKUList"
            :disabled="indexOfSKUList.disabled"
          />
        </el-select>
        <el-button type="danger" @click="handleDelInput(item, index)">
          <i class="el-icon-circle-close" /> 删除规格
        </el-button>
        <div class="partial" style="margin-left:60px;">
          <el-tag
            v-for="(tag, indexOfDynamicTags) in item.dynamicTags"
            :key="indexOfDynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag, index, indexOfDynamicTags)"
          >{{ tag.value }}</el-tag>
          <el-input
            v-if="item.inputVisible"
            v-model="item.inputValue"
            size="small"
            class="input-new-tag"
            @keyup.enter.native="handleInputConfirm(index, item, item.inputValue)"
            @blur="handleInputConfirm(index, item, item.inputValue)"
          />
          <el-button v-else class="button-new-tag" size="small" @click="showInput(item, index)">+ 添加属性</el-button>
        </div>
      </div>
      <div class="partial">
        <el-button type="success" size="small" @click="handleAddInput()">
          <i class="el-icon-circle-plus" /> 添加规格
        </el-button>
      </div>
    </div>
    <!-- guige -->
    <div class="partial">
      <p>规格信息：</p>
      <el-table :show-header="true" :data="tableData" style="width: 100%">
        <el-table-column align="center" label="图片">
          <template slot-scope="scope">
            <uploader-with-file-list
              accept=".jpg, .png"
              :limit="1"
              :file-list="scope.row.fileList"
              :on-success="(response, file, fileList) => uploadImageForeachSpecification(response, file, fileList, scope.$index)"
              :before-upload="handleBeforeUpload"
              :show-file-list="false"
              style="width:100%;height:auto;"
            />
          </template>
        </el-table-column>
        <template v-for="(item,indexOfDataScheme) in tableHeader" a>
          <el-table-column
            :key="indexOfDataScheme"
            align="center"
            :prop="item.prop"
            :label="item.label"
          />
        </template>
        <el-table-column align="center" label="价格">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price" placeholder="输入价格" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

import UploaderWithFileList from 'components/UploaderWithFileList'

export default {
  name: 'TagManagement',
  components: {
    UploaderWithFileList
  },
  data() {
    return {
      skuList: [
        { typeName: '颜色', id: '1', disabled: false },
        { typeName: '尺寸', id: '2', disabled: false },
        { typeName: '重量', id: '3', disabled: false },
        { typeName: '内存', id: '4', disabled: false },
        { typeName: '版本', id: '5', disabled: false },
        { typeName: '套餐', id: '6', disabled: false }
      ],
      reminder: false,
      goodsDetail: '',
      tableData: [],
      specificationsNum: '',
      tableHeader: [],
      specification: [
        { value: '', dynamicTags: [], inputVisible: false, inputValue: '', typeName: '', disabled: false, label: '', prop: '' }
      ],
      fileList: [],
    }
  },
  created() {
    this.specificationsNum = 1
  },
  methods: {
    uploadImageForeachSpecification(response, file, fileList, index) {
      this.tableData[index].fileList = fileList
    },
    arrayUnique2(arr, name) {
      var hash = {}
      return arr.reduce(function(item, next) {
        hash[next[name]] ? '' : hash[next[name]] = true && item.push(next)
        return item
      }, [])
    },
    handleSKUValueChange(item, i) {
      var newTableHeader = []
      // skuinfo是规格信息，包含规格的类型名和规格的类型id
      const skuinfo = item.value
      console.log('skuinfo after aku value change', skuinfo)
      // 在此设置已经被选中的规格信息在规格下拉框里禁选
      const index = this.skuList.findIndex(value => value.id === skuinfo.id)
      this.skuList[index].disabled = true
      // 设置表头 和 prop
      this.specification[i].label = skuinfo.typeName
      this.specification[i].prop = 'prop' + skuinfo.id
      // 增加表头
      this.tableHeader.push(this.specification[i])
      console.log('table header after sku value changed', this.tableHeader)
      console.log('specification after sku value changed', this.specification)
      // 因为每次改变规格都会触发此函数，会自动添加表头，为了让表头信息的规格信息保持一致
      // 每次改变值都要让表头和规格信息逐个比较，删掉无用的值
      this.tableHeader.map((item, index) => {
        this.specification.map(itm => {
          if (itm.value !== '') { // 如果是还没选值的空白规格，则不比较
            if (itm.value.typeName === item.label) {
              newTableHeader.push(item)
            }
          }
        })
      })
      // 如果由重复的标签，则去掉重复的
      newTableHeader = this.arrayUnique2(newTableHeader, 'label')
      console.log('new tableHeader after skuvalue change', newTableHeader)
      this.tableHeader = newTableHeader
      // 根据表头的改变释放skuList当中被禁用的选择项
      for (let i = 0; i < this.skuList.length; i++) {
        this.skuList[i].disabled = false
      }
      this.tableHeader.map(item => {
        const index = this.skuList.findIndex(value => value.typeName === item.label)
        this.skuList[index].disabled = true
      })
      // 规格已变，旧数据没法放到新的规格表，清空旧数据
      this.tableData = []
      // 生成新的规格表
      this.createTableData()
    },
    handleDelInput(data, index) {
      // 至少要由一个规格
      if (this.specificationsNum === 1) {
        this.$message({ message: '至少有 1 个规格', type: 'warning' })
        return
      }
      // 删除规格
      this.specification.splice(index, 1)
      // 规格数减一
      this.specificationsNum -= 1
      // 删除规格所对应的表头
      this.tableHeader.map((item, index) => {
        if (data.label === item.label) {
          this.tableHeader.splice(index, 1)
        }
      })
      // 根据表头的改变释放skuList当中被禁用的选择项
      for (let i = 0; i < this.skuList.length; i++) {
        this.skuList[i].disabled = false
      }
      this.tableHeader.map(item => {
        const index = this.skuList.findIndex(value => value.typeName === item.label)
        this.skuList[index].disabled = true
      })
      // 规格已变，旧数据没法放到新的规格表，清空旧数据
      this.tableData = []
      // 生成新的规格表
      this.createTableData()
    },
    handleOptionValueChange() {
      for (let i = 0; i < this.goods.length; i++) {
        if (this.goods[i].typeName === this.ruleForm.goodsClassify) {
          this.ruleForm.goodsClassifyId = this.goods[i].id
        }
      }
    },
    async handleGetSKUTypeList(item) {
      // const index = this.goodsInformation.specification.indexOf(item)
    },
    handlePriceFormat(price) {
      var rg = /^[+]{0,1}(\d+)$/
      if (price > 0 && price <= 65535 && rg.test(price) === true) {
        return true
      } else {
        return false
      }
    },
    handleClose(tag, indexOfSpecification, indexOfDynamicTags) {
      // 从规格的属性集合中删除此属性
      this.specification[indexOfSpecification].dynamicTags.splice(indexOfDynamicTags, 1)
      // 由于规格表格是由规格的属性排列组合组成，删除一个规格的一个属性可能会需要删除多个规格表中的行，以此把这些要删除的项放到一个数组里
      console.log('tag ', tag)
      var delItems = []
      this.tableData.map((item, index) => {
        if (item[this.specification[indexOfSpecification].prop] === tag.value) {
          delItems.push(index)
        }
      })
      console.log('del item', delItems)
      delItems.reverse().map(item => {
        this.tableData.splice(item, 1)
      })
    },
    showInput(item, index) {
      this.specification[index].inputVisible = true
    },
    handleInputConfirm(index, data, tagsValue) {
      // 属性值不能为空
      if (tagsValue === '') {
        this.$message({ message: '温馨提示：属性值为长度为 1 到 10 个任意字符串', type: 'warning' })
        return
      }
      // 还没选值的规格不能有属性值
      if (data.value === '') {
        this.$message({ message: '温馨提示：填写属性之前请选择规格', type: 'warning' })
        // 清楚垃圾数据
        this.specification[this.specification.indexOf(data)].inputValue = ''
        return
      }
      // 阻止重复数据的添加
      const addedTag = this.specification[this.specification.indexOf(data)].inputValue
      var indexOfExistTag = this.specification[this.specification.indexOf(data)].dynamicTags.findIndex(value => value.value === addedTag)
      if (indexOfExistTag !== -1) {
        this.$message({ message: '温馨提示：属性不能为重复', type: 'warning' })
        this.specification[this.specification.indexOf(data)].inputValue = ''
        return
      }
      var inputValue = data.inputValue
      if (inputValue && inputValue.length <= 10) {
        if (this.specification[this.specification.indexOf(data)].dynamicTags.length < 10) {
          this.specification[this.specification.indexOf(data)].dynamicTags.push({ value: inputValue })
        } else {
          this.$message({ message: '温馨提示：属性最多只能添加10个', type: 'warning' })
          return
        }
      } else {
        this.$message({ message: '温馨提示：属性最多只能输入10个任意字符', type: 'warning' })
        return
      }
      data.inputVisible = false
      data.inputValue = ''
      console.log('标签所属规格', data)
      console.log('规格下表:', index)
      console.log('新增的标签的值:', tagsValue)
      // 这里写死
      if (this.tableHeader.length === 1) {
        var obj = {}
        obj[this.tableHeader[0].prop] = tagsValue
        obj.totalPrice = ''
        obj.skuLogo = ''
        obj.fileList = []
        obj.skuInfos = [
          {
            skuTypeId: this.tableHeader[0].value.id,
            skuName: tagsValue
          }
        ]
        this.tableData.push(obj)
      }
      if (this.tableHeader.length === 2) {
        for (let i = 0; i < this.specification.length; i++) {
          if (i !== index) {
            this.specification[i].dynamicTags.map((itm, indexx) => {
              var obj = {}
              obj.totalPrice = ''
              obj.skuLogo = ''
              obj.fileList = []
              obj[this.specification[i].prop] = this.specification[i].dynamicTags[indexx].value
              obj[this.specification[index].prop] = tagsValue
              obj.skuInfos = [
                {
                  skuTypeId: this.specification[index].value.id,
                  skuName: tagsValue
                },
                {
                  skuTypeId: this.specification[i].value.id,
                  skuName: this.specification[i].dynamicTags[indexx].value
                }
              ]
              this.tableData.push(obj)
            })
          }
        }
      }
      if (this.specification.length === 3) {
        const arr = [0, 1, 2] // 用来与其它两个规格的属性做排列组合
        arr.splice(index, 1)
        this.specification[arr[0]].dynamicTags.map((itm, itmIndex) => {
          this.specification[arr[1]].dynamicTags.map((it, itIndex) => {
            const obj = {}
            obj.totalPrice = ''
            obj.skuLogo = ''
            obj.fileList = []
            obj[this.specification[index].prop] = tagsValue
            obj[this.specification[arr[0]].prop] = this.specification[arr[0]].dynamicTags[itmIndex].value
            obj[this.specification[arr[1]].prop] = this.specification[arr[1]].dynamicTags[itIndex].value
            obj.skuInfos = [
              {
                skuTypeId: this.specification[index].value.id,
                skuName: tagsValue
              },
              {
                skuTypeId: this.specification[arr[0]].value.id,
                skuName: this.specification[arr[0]].dynamicTags[itmIndex].value
              },
              {
                skuTypeId: this.specification[arr[1]].value.id,
                skuName: this.specification[arr[1]].dynamicTags[itIndex].value
              }
            ]
            this.tableData.push(obj)
          })
        })
      }
    },
    // 删除或者添加规格时清空表数据并且生成对应的表数据
    createTableData() {
      // 这里要数组去重， 三重规格的处理
      if (this.tableHeader.length === 1) {
        // this.tableData = []
        // 不要每一次都重置，规格数变的时候重置，新增属性的时候把原数据存到另一个数组
        for (let i = 0; i < this.tableHeader[0].dynamicTags.length; i++) {
          var o = {}
          o[this.tableHeader[0].prop] = this.tableHeader[0].dynamicTags[i].value
          o.delKey = this.tableHeader[0].dynamicTags[i].value
          o.skuLogo = ''
          o.fileList = []
          o.totalPrice = ''
          o.price = ''
          o.skuInfos = [
            {
              skuTypeId: this.tableHeader[0].value.id,
              skuName: this.tableHeader[0].dynamicTags[i].value
            }
          ]
          this.tableData.push(o)
        }
        this.tableData = this.arrayUnique2(this.tableData, this.tableHeader[0].prop)
      }
      if (this.tableHeader.length === 2) {
        this.tableData = []
        for (let i = 0; i < this.tableHeader[0].dynamicTags.length; i++) {
          for (let j = 0; j < this.tableHeader[1].dynamicTags.length; j++) {
            var o1 = {}
            o1[this.tableHeader[0].prop] = this.tableHeader[0].dynamicTags[i].value
            o1[this.tableHeader[1].prop] = this.tableHeader[1].dynamicTags[j].value
            o1.totalPrice = ''
            o1.skuLogo = ''
            o1.fileList = []
            o1.skuInfos = [
              {
                skuTypeId: this.tableHeader[0].value.id,
                skuName: this.tableHeader[0].dynamicTags[i].value
              },
              {
                skuTypeId: this.tableHeader[1].value.id,
                skuName: this.tableHeader[1].dynamicTags[j].value
              }
            ]
            this.tableData.push(o1)
          }
        }
      }
      if (this.tableHeader.length === 3) {
        this.tableData = []
        for (let i = 0; i < this.tableHeader[0].dynamicTags.length; i++) {
          for (let j = 0; j < this.tableHeader[1].dynamicTags.length; j++) {
            for (let k = 0; k < this.tableHeader[2].dynamicTags.length; k++) {
              var o2 = {}
              o2[this.tableHeader[0].prop] = this.tableHeader[0].dynamicTags[i].value
              o2[this.tableHeader[1].prop] = this.tableHeader[1].dynamicTags[j].value
              o2[this.tableHeader[2].prop] = this.tableHeader[2].dynamicTags[k].value
              o2.totalPrice = ''
              o2.skuLogo = ''
              o2.fileList = []
              o2.skuInfos = [
                {
                  skuTypeId: this.tableHeader[0].value.id,
                  skuName: this.tableHeader[0].dynamicTags[i].value
                },
                {
                  skuTypeId: this.tableHeader[1].value.id,
                  skuName: this.tableHeader[1].dynamicTags[j].value
                },
                {
                  skuTypeId: this.tableHeader[2].value.id,
                  skuName: this.tableHeader[2].dynamicTags[k].value
                }
              ]

              this.tableData.push(o2)
            }
          }
        }
      }
    },
    handleAddInput() {
      if (this.specificationsNum < 3 && this.specificationsNum >= 0) {
        this.specificationsNum += 1
        this.specification.push({ value: '', dynamicTags: [], inputVisible: false, inputValue: '' })
      } else {
        this.$message({ message: '温馨提示：规格最多只能添加3个', type: 'warning' })
        return
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.inner_container {
  margin-bottom: 20px;

  .partial {
    margin: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
}

.order_wrapper {
  width: 50px;
  margin: 0 auto;

  >>>.el-input__inner {
    text-align: center;
  }
}

span {
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  font-weight: 700;
  color: #606266;
  margin-bottom: 15px;
}

.tishi {
  color: red;
}

a {
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  color: #606266;
}

hr {
  margin-top: 15px;
  margin-bottom: 15px;
}

.avatar-uploader {
  width: 50px;
  height: 50px;
  display: block;
}

.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
}

el-table {
  background: red;
}

.reminder {
  color: red;
  float: right;
  margin-top: 30px;
}

.footer {
  display: flex;
  justify-content: center;
  margin: 70px;
}
</style>
