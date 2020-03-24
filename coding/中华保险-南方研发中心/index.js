function foo() {
    setTimeout(
        () => {
            console.log(this.id)
        }
        , 100)
}
var id = 21
foo.call({ id: 42 })