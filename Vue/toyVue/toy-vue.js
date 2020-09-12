export class ToyVue {
    constructor(config) {
        this.template = document.querySelector(config.el)
        this.data = config.data
    }
}

let effects = [];

function effect(fn) {
    effects.push(fn);
    fn()
}

function reactive(object) {
    let observed = new Proxy(object, {
        set(object, property, value) {
            object[property] = value
            for (let effect of effects) {
                effect()
            }
            return value
        }
    })
    return observed
}

let dummy
const counter = reactive({
    num: 0
})
effect(() => {
    dummy = counter.num
})
console.log(dummy)
counter.num = 7
console.log(dummy)

let arr = [1, 2, 3, 4, 5, 6]
for (let i of arr) {
    console.log(i)
}