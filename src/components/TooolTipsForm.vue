<template>
<div class=" flex" >
    <slot></slot>
 <button class="tool">ToolTip</button>
</div>
</template>

<script>
export default{
    methods:{

    }
}
</script>

<style>


.flex:hover .tool{
    opacity: 1;
}

.tool{
    margin-left: 10px;
    background-color: rgb(39, 38, 38);
    padding: 10px 13px;
    border: none;
    border-radius: 4px;
    font-size: 20px; 
    opacity: 0;
    transition: all .3s;

    color: #fff;

}

</style>