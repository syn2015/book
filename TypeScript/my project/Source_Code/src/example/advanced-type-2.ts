

class Counter {
    constructor(public count: number = 0) { }
    add(value: number) {
        this.count += value
        return this
    }
    subtract(value: number) {
        this.count -= value
        return this
    }
}
const counterC = new Counter(10)
// 链式调用
console.log(counterC.add(3).subtract(2))

class PowCounter extends Counter {
    constructor(public count: number = 0) {
        super(count)
    }
    pow(value: number) {
        this.count = this.count ** value
        return this
    }
}
const powCounter = new PowCounter(2)
console.log(powCounter)
// 可以使用父类的方法并链式调用
console.log(powCounter.pow(3).add(1).subtract(3))

//
// keyof，返回由该对象组成的所有属性的联合类型
interface InfoInterfaceAdvanced {
    name: string;
    age: number;
}
let infoProp: keyof InfoInterfaceAdvanced
infoProp = 'name'
infoProp = 'age'
// infoProp='sex'

// 结合泛型，TS检测使用了动态属性的代码
function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(n => obj[n])
}
const infoObj = {
    name: 'lili',
    age: 18
}
const infoValuesName = getValue(infoObj, ['name'])
const infoValues: (string | number)[] = getValue(infoObj, ['name', 'age'])
console.log('infoValues,',infoValues)

// []索引访问修饰符
type NameType = InfoInterfaceAdvanced['name']

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}
// [] 结合泛型
interface Objs<T> {
    [key: string]: T
}
const objs1: Objs<number> = {
    age: 19
}
// let keys:keyof Objs<number>['name']

interface Type {
    a: never,
    b: never,
    c: string,
    d: number,
    e: undefined,
    f: null,
    g: object
}
// string|object|number
type Test = Type[keyof Type]


interface Info1 {
    age: number
    name: string
    sex: string
}
// interface ReadonlyType{
//     readonly age:number
// readonly name: string
// readonly sex: string
// }
// 映射类型，in此处用作for...in 循环遍历
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
    // 可选属性?
    // readonly [P in keyof T]?: T[P]
}
// type ReadonlyInfo1 = ReadonlyType<Info1>
// 直接使用Readonly 关键字
type ReadonlyInfo1=Readonly<Info1>
const info11: ReadonlyInfo1 = {
    age: 18,
    name: 'lili',
    sex: 'man'
}

// 内置类型：readonly Partial
// 内置类型 Pick Record
// pick源码
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }
// record源码 K是属性名，T是属性值
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// }

// record示例
interface Info2 {
    name: string,
    age: number,
    address: string
}
const infoT: Info2 = {
    name: 'lili',
    age: 18,
    address: 'beijing'
}
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const res: any = {}
    keys.map((key) => {
        res[key] = obj[key]
    })
    return res
}
const nameAndAddress = pick(infoT, ['name', 'address'])
console.log(nameAndAddress)

function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
    const res: any = {}
    for (const key in obj) {
        res[key] = f(obj[key])
    }
    return res
}
const names = { 0: 'hello', 1: 'world', 2: 'bye' }
const lengths = mapObject(names, (s) => s.length)
console.log('lengths,',lengths)

// 同态 readonly ,pick,Partial ,不包括record
type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(obj: T): Proxify<T> {
    const result = {} as Proxify<T>
    for (const key in obj) {
        result[key] = {
            get: () => obj[key],
            set: (value) => obj[key] = value
        }
    }
    return result
}
const props = {
    name: 'lili',
    age: 18
}
const proxyProps = proxify(props)
console.log('proxyProps,',proxyProps)
proxyProps.name.set('li')
console.log('proxyProps set,',proxyProps.name.get())
// 拆包
function unproxify<T>(t: Proxify<T>): T {
    const result = {} as T
    for (const k in t) {
        result[k] = t[k].get()
    }
    return result
}
const originalProps = unproxify(proxyProps)
console.log('originalProps,',originalProps)

// 增加或移除特定修饰符

// + - 作为前缀，指定增减特定修饰符

interface Infoags {
    age: number
    name: string
    sex: string
}
// 映射类型，in此处用作for...in 循环遍历
type ReadonlyTypeType<T> = {
    +readonly [P in keyof T]?: T[P]
}
type ReadonlyInfoinfo = ReadonlyTypeType<Infoags>
let ReadonlyInfoinfo:ReadonlyInfoinfo={
    age:18,
    name:'lili',
    sex:'female'
}
// + - 作为前缀，指定增减特定修饰符
type RemoveReadOnlyInfo2<T>={
    -readonly [p in keyof T]-?:T[p]
}
type Info1WithOutReadonly=RemoveReadOnlyInfo2<ReadonlyInfoinfo>


const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
type Objs2 = {
    [stringIndex]: string,
    [numberIndex]: number,
    [symbolIndex]: symbol
}
type keysType = keyof Objs2

// string,number, Symbol上的映射类型
type ReadonlyTypes<T> = {
    readonly [P in keyof T]: T[P]
}
const objs3: ReadonlyTypes<Objs2> = {
    a: 'aa',
    1: 11,
    [symbolIndex]: Symbol(),
}
// objs3.a='bb'

// 元祖和数组上的映射，不会生成新类型，有数组的方法
type MapToPromise<T> = {
    [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type promiseTuple = MapToPromise<Tuple>
const tuple1: promiseTuple = [
    new Promise((resolve, reject) => resolve(1)),
    new Promise((resolve, reject) => resolve('a')),
    new Promise((resolve, reject) => resolve(false)),
]

// unknown类型 3.0版本的顶级类型

// 任何类型都可以赋值给unknown
let valueUnknown: unknown
valueUnknown = 'a'
valueUnknown = 123
// 如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，只能赋值给unknown和any
let valueUnknown2:unknown
// let valueUnknown3:string=valueUnknown2
valueUnknown=valueUnknown2

// 如果没有类型断言或基于控制流的类型细化时，不能在unknown上进行任何操作
// let value4:unknown
// value4 +=1

// unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type type1 = string & unknown
type type2 = number & unknown
type type3 = unknown & unknown
type type4 = unknown & string[]

// unknown 与任何其他类型(除了any是any)组成的联合类型，都等于unknown类型
type type5 = unknown | string
type type6 = any | unknown
type type7 = number[] | unknown

// never类型是unknown的子类型
type type8 = never extends unknown ? true : false

// keyof unknown 等于类型never
type type9 = keyof unknown

// 只能对unknown进行等或不等操作(===,!==)，不能进行其他操作


// unknown 类型的值不能访问他的属性，不能作为函数调用和作为类创建实例
// let value10:unknown
// value10.age
// value10()
// new value10()

// 使用映射类型时如果遍历的是unknown类型，则不会映射任何属性
type Types1<T> = {
    [P in keyof T]: number
}
type type11 = Types1<any>
type type12 = Types1<unknown>

//  条件类型， T extends U ? X:Y
type Types2<T> =T extends string ? string:number
let indexType2:Types2<123>
let indexType3:Types2<'123'>

// 待检测类型是联合类型时，该条件就是分布式检测类型
type TypeNameT<T>=T extends any ?T:never
type Type3=TypeNameT<string | number>

// 示例
type TypeName<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined :
    T extends () => void ? () => void :
    object
type Type4 = TypeName<() => void>
type Type5 = TypeName<string[]>
type Type6 = TypeName<(() => void) | string[]>

// 示例 exclude
type Diff<T, U> = T extends U ? never : T
type TestDiff = Diff<string | number | boolean, undefined | number>

//

type Type7<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

interface Part {
    id: number,
    name: string,
    // subparts:Part[],
    subparts(newName: string): void,
    undatePart(newName: string): void
}

type Test1 = Type7<Part>

// infer 关键字 推断类型；数组返回元素的类型，对象直接返回对象的类型

type Type8<T> = T extends any[] ? T[number] : T
// string类型数组和string类型
type Test2 = Type8<string[]>
type Test4 = Type8<string>
// infer 关键字 推断类型并保存在U当中
type Type9<T> = T extends Array<infer U> ? U : T
type Test5 = Type9<string[]>
type Test6 = Type9<string>

// 内置条件类型 2.8新增
// type Type10 =Exclude<'a'|'b'|'c','a'|'b'>
// exclude 从类型中排除属性
type Type10 = Exclude<'a' | 'b' | 'c', 'a'>

// Extract<T,U>
type Type11 = Exclude<'a' | 'b' | 'c', 'c' | 'b'>

// NonNullable<T>，去掉null和undefined
type Type12 = NonNullable<string | number | undefined | null>

// ReturnType<T>，获取函数返回值类型
type Type13 = ReturnType<() => string>
type Type14 = ReturnType<() => void>

// InstanceType<T> 获取构造函数的实例类型
// InstanceType<T>的实现源码：T是一个构造函数类型，
// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any
class AClass {
    constructor() { }
}
// typeof获取类型
type T1 = InstanceType<typeof AClass>
// any是任何类型的子类型
type T2 = InstanceType<any>
// never也是构造函数的子类型
type T3 = InstanceType<never>
// type T4=InstanceType<string>

