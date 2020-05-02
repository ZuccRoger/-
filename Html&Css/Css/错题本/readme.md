# 错题
---
*   1.块级元素会独占一行,默认情况下,其宽度自动填满其父元素宽度。
    行内元素不会独占一行,相邻的行内元素会排列在同一行里,直到一行排不下,才会换行,其宽度随元素的内容而变化。

>   2.块级元素的padding和margin值的设置都是有效的。行内元素和块级元素都是盒子模型。
    行内元素的padding-top、padding-bottom、margin-top、margin-bottom属性设置是无效的（top bottom）
    行内元素的padding-left、padding-right、margin-left、margin-right属性设置是有效的（left right）
    行内元素的 line-height 属性设置是有效的。
    行内元素的 width、height 属性设置是无效的。
    行内元素的padding-top、padding-bottom从显示的效果上是增加的，但其实设置的是无效的，并不会对他周围的元素产生任何影响
3.strong是行内元素，它的width、height属性设置无效（没错啊？？？）
>4. textarea是行内元素 - 多行文本输入框，input也是行内元素
行内inline 块级block 行内块级line-block(拥有内在尺寸，可设置高宽，不会自动换行 )😎
---
