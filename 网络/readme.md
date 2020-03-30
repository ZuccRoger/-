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

####    HTTP
#####   优点
1.  灵活可拓展
2.  可靠--- 基于TCP/IP协议
3.  应用层协议
    *   FTP只能传输文件
    *   SMTP只能发送邮件
    *   SSH只能远程登陆
4.  使用的是 请求应答通信模式
5.  HTTP是无状态协议
#####   缺点
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

---
####    http历史
1.  在1.0版本汇总加入了HEAD、Post等新方法
2.  增加了响应的状态码，标记错误的原因
3.  引入了协议版本号概念
4.  引入了HTTP Header（头部）的概念，让HTTP处理请求和响应更加的灵活
5.  传输的数据不再仅限于文本

######  Http1.1
1.  增加了PUT、DELETE等新的方法
2.  增加了缓存管理和控制
3.  明确了连接管理和持久化连接
4.  允许响应数据分块，利于传输大文本
5.  强制要求Host头，让互联网主机托管成为可能

*   规定了8种方法
*   get
*   head 获取数据元信息
*   post 一般用于新建
*   put 一般用于修改
*   delete
*   connect
*   option
*   traces

###### Http2
1.  Http的连接慢，无法跟上互联网发展（像以前常见的切图、JS合并等网页优化手段）
2.  二进制协议 不再是纯文本 
3.  废弃1.1的管道 
4.  专用算法压缩头部减少数据的传输
5.  允许服务器主动向客户端发送数据 要求了加密通信

---
####    输入url到敲会车
1.  浏览器从地址栏中输入，获得服务器的IP和端口
2.  HTTP是建立在TCP/IP协议之上的所以，会先进行TCP/IP的三次握手
3.  浏览器向服务器拼接好报文
4.  服务器收到报文请求之后，再拼接好报文返还给浏览器
5.  浏览器解析、页面成像

--- 
####    域名解析
1.  会存在多级缓存
2.  浏览器->os->本机域名解析文件hosts 
    >   127.0.0.1 www.chrono.com
3.  会有CDN的存在 从而实现“短路”

---
####    URI
1.  组成
    >   scheme host:port path query
2.  scheme:
    *   http https ftp ldap file news
3.  host:port 
    *   http : 80
    *   https: 443

--- 
####    TCP/IP
1.  是传输层的协议 所以不会关注body

---
####    http连接
1.  短连接
2.  长连接
    >   改善性能 http1.1中 默认长连接 或者 请求头中加入 connection-keep alive
    >   缺点： 长时间不关闭 消费服务器资源
    connection:close 可以关闭长连接
    服务端也可以控制长连接 比如nginx配置
    1. 使用“keepalive_timeout”指令，设置长连接的超时时间，如果在一段时间内连接上没有任何数据收发 就主动断开连接，避免空闲连接占用系统资源。
    2. 使用“keepalive_requests”指令，设置长连接上可发送的最大请求次数。比如设置成1000，那么当 Nginx在这个连接上处理了1000个请求后，也会主动断开连接。
    持续长连接攻击 ->   DDos
3.  队头阻塞
    >   是由HTTP的请求-应答模型导致的
    >   在http1.1中无法解决 只能优化 用 并发连接 和 域名分片 来解决问题

---
####    cookie
1.  响应头字段Set-Cookie 和 请求头字段 Cookie
2.  安全方面 XSS防止 用httoonly  即 不能通过 document.cookie 去访问
            CSRF防止 SameSite=‘srtict‘  限制cookie不能跳转连接跨站
---
####    缓存
1.  分为 客户端缓存 和 服务器缓存
2.  Cache-Control：max-age 设置时间 no-store：不允许缓存（秒杀页面）
    no-cache可以缓存但是每次要和服务器去验证 must-revalidate：不过期继续使用，但是过期了就必须要去服务器
3.  验证有5个If的头字段，If-Modified-Since 和 If-None-Match
    Etag有强弱之分 LastModify （没看懂）

--- 
####    加密
1.  非对称加密 和 对称加密
    *   对称加密 最大的问题就是 如何把 密钥 给对方
    *   从而有 非对称加密
    *   非对称加密 有 公钥 和 私钥 公钥是公开的但是私钥仅仅自己拥有
    *   RSA是非对称加密的算法 几乎可以说是非对称加密的代名词 
    *   但是非对称加密速度非常慢 
    *   现在主要使用 混合加密  非对称加密->密钥
    