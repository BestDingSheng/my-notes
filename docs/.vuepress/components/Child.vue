<template>
 <div class="main-container">
  <div class="text">{{title}}</div>
  <div class='author'>
      <em>{{source}}</em>
    </div>
 </div>
</template>

<script>
export default {
    props:['title', 'source'],
    mounted () {
        console.log(this)
        console.log(this.title)
    }
}
</script>
