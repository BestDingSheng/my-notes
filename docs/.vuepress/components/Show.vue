<template>
  <div class="box">
    dingsheng
  </div>
</template>
<script>


export default {
  data () {
    return {
      text: '按键的name'
    }
  },
  methods: {
    changeText (value) {         // 自定义事件修改text的值
      this.text = value
    }
  }
}
</script>