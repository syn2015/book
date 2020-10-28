# vue3_todolist

## options api and composition api

### options api
```javascript
export default{
    data:...,
    computed:...,
    methods:...,
    watch:...,
    mounted():...
}
```
### composition api
```javascript
export default{
   setup:(props,context){
       ref()://或reactive()
       computed();
       // 自定义函数
       watchEffent();
       onMounted();
   }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
