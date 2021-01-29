/* Блочная область видимости ( как у let )
Невозможно дублирование объявления ( как у let )
В общем, все, как у let, только:
:warning: Изменить значение нельзя */
const XXX = 11
XXX = 55
/* Будет сгенерировано исключение:

⛔️ Uncaught TypeError: Assignment to constant variable. */