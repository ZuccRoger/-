CSRF cross-site request forgery 跨站点请求伪造
XSS cross-site Scripting 跨站点脚本
协议+域名+端口
但是有三个标签 允许跨域加载资源
img  link script 

解决方案
1.  JSONP (JSON with padding)
    由两部分组成：回调函数和数据

http状态码
    2XX 代表成功
    200 
    204 该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中 不含实体的主体部分
    206 该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求

    3XX 响应结果表明浏览器需要执行某些特殊的处理以正确处理请求
    301 永久重定向
    302 临时重定向
    307 临时重定向 307 会遵照浏览器标准，不会从 POST 变成 GET。但是，对于处理响
应时的行为，每种浏览器有可能出现不同的情况。

    4XX 的响应结果表明客户端是发生错误的原因所在。
    401 Unauthorized
    403 Forbidden
    404 Not Found

    5XX 的响应结果表明服务器本身发生错误。
    500 Internal Server Error
    503 Service Unavailable  该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法 处理请求。如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回给客户端。

    constructor
    getDerivedFromProps
    render
    componentdidmount

    getDerivedFromProps
    shouldComponentupdate
    render
    getsnapbeforeupdate
    compoenntdidupdate

    TCP/IP的分层管理
    1.  应用层、传输层、网络层和数据链路层
        *   应用层决定了向用户提供应用服务时通信的活动。
            TCP/IP 协议族内预存了各类通用的应用服务。比如：
            FTP(File Transfer Protocol，文件传输协议)和 DNS(Domain Name System，域 名系统)服务就是其中两类。 HTTP 协议也处于该层。
        *   传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据 传输。
            在传输层有两个性质不同的协议:TCP(Transmission Control Protocol，传输控制协议)和 UDP(User Data Protocol，用户数据报 协议)。    
        *   网络层
            网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数 据单位
        *   链路层
            硬件上的范畴均在 链路层的作用范围之内。

    TCP是确认可靠的 位于传输层 用了三次握手 SYN 和 ACK   

    若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。

    与 URI(统一资源标识符)相比，我们更熟悉 URL(Uniform Resource Locator，统一资源定位符)。URL 正是使用 Web 浏览器等 访问 Web 页面时需要输入的网页地址。比如，下图的 http://hackr.jp/ 就是URL。

---

####    预防 XSS
1.  cookie 设置HTTP-only
    *  从而js无法用document.getCookie获取到cookie
2.  X-XSS-Protectin
    *   如果是1 则过滤XSS 

---

####    HTTP缺点
1.  使用明文（不加密）内容可能被监听
2.  不验证通信方的身份，可能遭遇伪装
3.  无法证明报文的完整性，可能获得篡改

---
####    HTTP加密方式
1.  通信加密
>   使用SSL和TLS对HTTP加密
2.  内容加密
>   
---
####    OSI七层模型
1.  物理层
2.  数据链路层
3.  网络层
4.  传输层
5.  会话层
6.  表示层
7.  应用层 






