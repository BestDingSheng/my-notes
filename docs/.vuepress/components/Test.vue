<template>
  <div>
    <Child v-bind:title='pyqDesc' source='朋友圈文案'></Child>
    <Child v-bind:title='diary' source='土味情话'></Child>
  </div>
    
</template>

<script>
import Child from './Child.vue';
import request from '../utils/request.ts';
import config from '../utils/config.ts';
import { returnContent } from '../utils/store.ts'

export default {
	components:{
		Child:Child,
	},
	 data () {
    return {
			diary:'经过两个多月，疫情终于快结束了，我给你发消息显示被拉黑了。你是如此的贴心，怕疫情通过网络传播给我，原来你一直在默默保护着我，只是我没发现',
			pyqDesc:'我经过你的世界，遇见了此生最美的风景。'
    }
  },
  methods:{
    async init(key) {
    const hasCache = sessionStorage.getItem(key);
    if (hasCache) {
      this[key] = hasCache
      return false;
    }
    const ispyqDesc = key === 'pyqDesc';
    const {tiangouUrl, pyqwenanUrl} = config;
    const url = ispyqDesc ? pyqwenanUrl : tiangouUrl;
    const tianData = await request.get(url);
    const { newslist = [] } = tianData;
    const content = returnContent(newslist);
    this[key] = content;
    sessionStorage.setItem(key, content);
    }
  },
 mounted () {
   this.init('pyqDesc');
   this.init('diary');
  }
}
</script>
