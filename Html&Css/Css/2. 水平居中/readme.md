inline  行内 一行内显示
如果要居中则 在inline的外层显示 text-align:center

block 块级 自己占据一行 
前提是必须有宽度 margin:0 auto 

浮动元素 设置居中样式
脱离了标准文档流 margin 无效

.square {
            height: 200px;
            width: 200px;
            background-color: gold;
            float: left;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            /*transform: translateY(-50%);*/
            /* 左偏移一半 */
        }

        span {
            color: gold;
            position: absolute;
            left: 50%;
            right: 0;
            transform: translateX(-50%);
        }

        .test {
            height: 200px;
            width: 200px;
            background-color: gold;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        /* 全局居中
        */

        .flex {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .table {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }

        div {
            height: 200px;
            width: 200px;
            background-color: gold;
        }

        .test1 {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;
        }

        /* 全局居中
        */
        .test2 {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: 0 auto;
        }


### 宽度不固定
1.  table实现
2.  display : inline 实现
3.  position : relative 实现


