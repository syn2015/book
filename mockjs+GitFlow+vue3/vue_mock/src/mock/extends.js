import {Random} from 'mockjs'
//自定义mock函数
Random.extend({
    fruit:function (params) {
        const arr=['liulian','apple','banana']
        return this.pick(arr);
    }
 })