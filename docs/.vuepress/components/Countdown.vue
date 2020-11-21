<!--
 * @Author: dingsheng
 * @Date: 2020-11-21 10:25:11
 * @LastEditTime: 2020-11-21 10:52:25
 * @LastEditors: Do not edit
 * @Description: 倒计时组件
-->

<template>
	<div class="shoucha shouchaday">
			<div class="showavg">距离{{title}}</div>
			<div class="shoupin">
				<span class="showtit">{{dataTime}}</span>
				<div class="showpinab">天/DAYS</div>
			</div>
	</div>
</template>
<script>

export default {
	 data () {
    return {
    	dataTime: '',
    }
  },
  methods:{
	getDistanceSpecifiedTime(dateTime) {
			// 指定日期和时间
			var EndTime = new Date(dateTime);
			// 当前系统时间
			var NowTime = new Date();
			var t = EndTime.getTime() - NowTime.getTime();
			var d = Math.floor(t / 1000 / 60 / 60 / 24);
			var h = Math.floor(t / 1000 / 60 / 60 % 24);
			var m = Math.floor(t / 1000 / 60 % 60);
			var s = Math.floor(t / 1000 % 60);
			// var html = d + " 天" + h + " 时" + m + " 分" + s + " 秒";
			var html = d;
			return d;
		}
  },
  props:['title', 'time'],	
 	mounted () {
		const time = this.time;
		const result = this.getDistanceSpecifiedTime(time);
		this.dataTime = result;
  }
}
</script>
