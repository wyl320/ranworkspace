<template>
	<div class="pulldown"> 
               <input type="text" value=""  @keydown="pullList(item)">
               <ul v-show="item.ulexpanded">
                 <li @click="addItem(item)">cccc</li>
               </ul>
    </div>
</template>
<script>
	export default{
		data()
	}
</script>