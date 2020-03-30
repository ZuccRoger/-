# React
1.  React事件采用 小驼峰
2.  React中不能返回 false 的方式阻止默认行为 必须显示地使用 preventDefault
    ```
    function ActionLink(){
        function handleClick(e){
            e.preventDefault()
            console.log('The link was clicked.');
        }
        reutrn (
            <a href = '#' onClick={handleClick}>
                Click me
            </a>
        )
    }
    ```
    >   你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。

    >   这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

    >   或者使用实验性语法
    ```
        class LoggingButton extends React.Component {
        // 此语法确保 `handleClick` 内的 `this` 已被绑定。
        // 注意: 这是 *实验性* 语法。
        handleClick = () => {
            console.log('this is:', this);
        }

        render() {
            return (
            <button onClick={this.handleClick}>
                Click me
            </button>
            );
        }
        }      
    ```
    >   或者 如果你没有使用 class fields 语法，你可以在回调中使用箭头函数：
    ```
        class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // 此语法确保 `handleClick` 内的 `this` 已被绑定。
        return (
        <button onClick={() => this.handleClick()}>
            Click me
        </button>
        );
    }
    }
    ```
    
3.  向事件传递参数
    ```
    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
    ```
    React 的事件对象 e 一般会被作为第二个参数进行传递
    如果是箭头函数 会 显示传递
    如果是bind 则会 隐式传递

4.  ###  高阶组件
    >def :  是React中复用逻辑的一种高级技巧，不是ReactAPI的一部分，是一种设计模式
    
    使用高阶组件解决 横切关注点问题？？
    
    >   不要在render里面使用 HOC

    >   React 的 diff 算法（称为协调）使用组件标识来确定它是应该更新现有子树还是将其丢弃并挂载新子树。 如果从 render 返回的组件与前一个渲染中的组件相同（===），则 React 通过将子树与新子树进行区分来递归更新子树。 如果它们不相等，则完全卸载前一个子树



5.  ### Context
    >   Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
    >   Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。

6.  ## 性能优化
    >   shouldComponentUpdate 默认返回 true 让React更新
    >   大部分情况下 使用React.Component来代替手写shouldComponentUpdate 
7.  ### PureComponent
    >   Component 并未实现 ShouldComponentUpdate 而 PureComponent里面以浅层的对比props 和 state 的方式来实现了该函数
    >   仅仅在 props & state 比较简单的情况下 才使用 PureComponent
    ---
    >   #####   forceUpdate
    >   强制 让组件 render 跳过 shouldComponentUpdate

8.  ## Hook

    >    基础hook
        1.  useState
        2.  useEffect
        3.  useContext
    >   额外的hook
        1.  userReducer
        2.  userCallBack
        3.  useMemo
        4.  useRef
        5.  useImperativeHandle
        6.  useLayoutEffect
        7.  useDebugValue
        
    ---
9.  #### renderProps
    >   创建 render props 的方式接收一个外部传递进来的 props 属性m,将内部的 state 作为参数传递给调用组件的 props 属性方法.

10. #### diff算法的原理
    >   

    ----

11. #### setState 什么时候是同步,什么时候是异步?

>   这里的“异步”不是说异步代码实现. 而是说 react 会先收集变更,然后再进行统一的更新.
    setState 在原生事件和 setTimeout 中都是同步的. 在合成事件和钩子函数中是异步的.
在 setState 中, 会根据一个 isBatchingUpdates 判断是直接更新还是稍后更新, 它的默认值是 false. 但是 React 在调用事件处理函数之前会先调用 batchedUpdates 这个函数, batchedUpdates 函数 会将 isBatchingUpdates 设置为 true. 因此, 由 react 控制的事件处理过程, 就变成了异步(批量更新).

12. exact是全匹配的意思
13. ajax请求数据拦截的地方可以设置在 model 的effect里面 按需记录
14. 