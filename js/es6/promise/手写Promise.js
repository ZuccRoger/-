function Promise(exector) {
    let self = this;
    //status表示一种状态
    let status = "pending";
    let value = undefined;
    let reason = undefined;
    //成功执行
    function resolve(value) {
        if (status == 'pending') {
            self.value = value;
            self.status = "resolve";
        }
    }
    //执行失败
    function reject(reason) {
        if (status == 'pending') {
            self.reason = reason;
            self.status = "reject"
        }
    }
    //对异常操作
    try {
        exector(resolve, reject)
    } catch (e) {
        reject(e)
    }
    //设置promise的then方法
    Promise.prototype.then = function(reject, resolve) {
        let self = this;
        if (this.status == 'resolve') {
            reject(self.value)
        }
        if (this.status == 'reject') {
            resolve(self.reason)
        }
    }
}
//new 一个promise  进行测试  
let promise = new Promise((reject, resolve) => {
    resolve("return resolve");
});
promise.then(data => {
    console.log(`success${data}`);

}, err => {
    console.log(`err${err}`);

})