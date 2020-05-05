import Mock from 'mockjs'

const uList = Mock.mock({
    'userList|10':[
        {
            id:'@increment(1)',
            name:'@cname()',
            'age|1-100':1,
            homeTown:'@city(true)'
        }
    ]
})

//console.log(uList)

Mock.mock('/user/info','get',()=>{
    return{
        status:200,
        msg:'mock已经拦截了请求'
    }
})