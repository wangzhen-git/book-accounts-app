<template>
   <div>
       <router-link to="/money">
           <Icon name="money"/>
           money
       </router-link>
       <router-link to="/labels">
           <Icon name="labels"/>
           labels
       </router-link>
       <router-link to="/statistics">
           <Icon name="statistics"/>
           statistics
       </router-link>
   </div>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    };
</script>

<style scoped lang="scss">

</style>