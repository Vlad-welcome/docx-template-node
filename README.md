# docx-template-node

Пример template.docx

Резюме для кандидата: {name}
Дата рождения : {birth_date}

Массив: {#array} {.}, {/array}

Массив items: {#myItem} {name}, {price} руб; {/myItem}

Вложенные данные: {#user}имя: {firstName}, {#address}город: {city}{/address}{/user}
С парсером: имя: {user.firstName}, город: {user.address.city}

С условием: {#hasCat}у меня есть кот: {cat}{/hasCat}{^hasCat}У меня нет кота{/hasCat}
