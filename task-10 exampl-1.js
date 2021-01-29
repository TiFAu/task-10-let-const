//💼 Упражнение 2
let Sample                                                              // Объявляется переменная

{
        let privateScope = {}                                           // Объявляется объект privateScope

        Sample = function () {                                          // Объявленная переменная инициализируется как функция без формальных параметров
                privateScope.name = 'Скрытые свойства'                  // Объект инициализируется внутри функции и у него появляется свойство name имеющее значение 'Скрытые свойства' 
        }

        Sample.prototype.addHiddenProperty =                            // Объявляется в прототипе функция Sample объявляется метод addHiddenProperty (стрелочная функция)
                ( newPropName, newPropValue ) =>                        // с двумя параметрами: имя нового свойства и его значение
                        privateScope [ newPropName ] = newPropValue     // функция добавляет в privateScope свойство и его значение

        Sample.prototype.getHiddenProperties = () => privateScope       // В прототип функции Sample добавляется метод getHiddenProperties (стрелочная функция без формальных параметров) получающая доступ к привалтной зоне
        
        Sample.prototype.getHiddenProperty =                            // В прототип функции Sample добавляется метод getHiddenProperty (стрелочная функция с формальным параметров prop) 
        
                prop => privateScope [ prop ]                           // возвращающая значение свойства запрошенного параметром 
}

var sample = new Sample ()                                              // Через конструктор new Sample () создается новая функция
//✍ Что вернет sample.getHiddenProperties () ?
sample.getHiddenProperties()                                            // Метод вернет объект со свойством namt = "Скрытые свойства"
//Что вернет sample.getHiddenProperty () ?
sample.getHiddenProperty()                                              // Метод без формального параметра (имени свойства) вернет undefine             
//✍ Что вернет sample.getHiddenProperty ( 'name' ) ?
sample.getHiddenProperty ( 'name' )                                     // Метод вернет  значение строкой "Скрытые свойства"