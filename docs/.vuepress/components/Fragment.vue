<template>
  <div class="main-container">
    <div class="text">{{obj.saying}}</div>
    <div class="text">{{obj.transl}}</div>
    <div class='author'>
      <em>{{obj.source}}</em>
    </div>
  </div>
</template>

<script>
// import axios from 'axios' 
import request from '../utils/request.ts';
import config from '../utils/config.ts';
import a, { setStore, getStore } from '../utils/store.ts'
export default {
  data () {
    return {
      obj: {
      "saying":"读书本意在元元。",
      "transl":"读书的目的应该是掌握了知识后为社会和大众服务，而不是为了自己的升官发财。",
      "source":"宋·陆游"
      }
    }
  },
  methods: {},
  async mounted () {
    const {poetryParams} = config;
    const cacheObj = getStore('obj');
    if (cacheObj) {
       this.obj = cacheObj;
       return false;
    }
    const data = await request.get(poetryParams);
    const {newslist=[]} = data;
    const hasValue = newslist.length > 0;
    if (hasValue) {
      const firstValue = newslist[0];
      this.obj = firstValue;
      setStore('obj',firstValue);
    }
  }
}
</script>

<style lang="postcss" scoped>
.main-container {
  background-color: #eee;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 16px;
}

.text {
  margin-bottom: 10px;
}

.author {
  text-align: right;
  font-size: 14px;
}
</style>
