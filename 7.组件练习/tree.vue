<!-- 在自己这个组件中想引用自己，可以给组件添加 name 值，通过name的值就可以引用自己，迭代组件-->
<!-- css样式只作用于自己的组件中：<style scope> </style> -->

<template>
  <ul class="tree">
    <li 
        v-for="(item, index) in treeData" 
        :key="item.name"
        class="tree-li"
        :class="{
            'scope': item.children,
            'acctive': showChildren[index]
        }"
    >
      <span @click="handleClick(index)">{{ item.name }}</span>
      <tree
        v-show="showChildren[index]"
        v-if="alreadyShow[index]"
        :tree-data="item.children"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree",
  props: ["tree-data"],
  data() {
    return {
        showChildren: [],
        alreadyShow: []
    };
  },
  methods:{
      handleClick(index) {
          this.showChildren.splice(index, 1, !this.showChildren[index]);
          if(this.showChildren[index]){
              this.alreadyShow.splice(index, 1, true);
          }
      }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@font-face {
  font-family: "iconfont";
  src: url("./static/iconfont.eot");
  src: url("./static/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./static/iconfont.woff2") format("woff2"),
    url("./static/iconfont.woff") format("woff"),
    url("./static/iconfont.ttf") format("truetype"),
    url("./static/iconfont.svg#iconfont") format("svg");
}

.tree-li {
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer;
}

.scope::before {
  display: inline-block;
  content: "\e65a";
  font-family: "iconfont";
}

.active::before {
  transform: rotateZ(-90deg);
}
</style>