# 垂直居中
1.  ##### 子绝父相
    子元素 子元素 position:absolute top 50% 如果margin-top：负高度一半 或者 transform：translateY（50%）

2.  ##### flex布局
    父元素 display：flex 
          flex-direction:column
          justify-content:center

3.  ##### table布局
    父元素 display:table
    子元素 display:table-cell
          vertical-align:middole

4.  ##### grid布局
    父元素 display:grid
          align-item:center
          justify-content:center
          grid-template-columns:repear(6,1fr)
          
5.  #### inline—block布局
    就是加一个兄弟元素 vertical-align设置为middle
                    display:inline-block
                    让兄弟元素的height:100%
                              content:''
                              width:0px
                              vertical-align:middle

6. #### line-height
    就是 line-height为整个高度
          