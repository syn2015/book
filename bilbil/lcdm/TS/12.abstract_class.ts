// 抽象类：abstract class,定义抽象类和抽象方法，不能实现抽象类（new)
abstract class Animalabstract{
    public name;
    public constructor(){
        this.name=name;
    }
    // 不能实现
    public abstract sayHi()
}
//
 class Catabstract extends Animalabstract {
     sayHi(){
         console.log('catabstract')
     }
 }
 let catab:Catabstract=new Catabstract();

 // 门的接口
 interface Alarm{
     alert():void;
 }
 // 门的抽象类：
  
 abstract class Door {
    public abstract open();
 }

 //继承Door，Door实现接口
 class SecurityDoor extends Door implements Alarm {
    open(){
        console.log('open');
    }
    alert(){
        console.log('alert');
        
    }
 }