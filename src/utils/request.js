function createFly(){
    if(mpvuePlatform === 'wx'){
        const Fly = require('flyio/dist/npm/wx')
        return new Fly
    }
    return null
}

export function get(url){
    const fly = createFly()
    if (fly){
        return new Promise((resolve,reject)=>{
            fly.get(url).then(response=>{
                console.log('成功')
                resolve(response)
            }).catch(err=>{
                console.log('失败')
                reject(err)
            })
        })
    }
}