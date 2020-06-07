* 多种声明方式声明
  * async function fun(){}
  * const foo = async function fun(){}
  * let obj = {

      async foo(){}  
    
    }
    
    obj.foo().then()

  * ```
      class Storage{
      constructor(params) {
        this.cachePromise = caches.open('avatars')
      }
      async getAvatar(name){
        const cache = await this.cachePromise
        return cache.match(`/avatars/${name}.jpg`)
      }
      }
      const storage = new Storage()
      storage.getAvatar('jake').then(...)

  * const foo = async ()=>{}