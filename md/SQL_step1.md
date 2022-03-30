## MySQL: Основы

* [Агрегация данных](#агрегация-данных)

### Базовые операции

1. Выбор базы данных

```sql
use name_db;
```

2. Выбрать все поля из данной таблицы и отобразить их в результатах выборки

```sql
select * from name_table;
```
Есть сокрощалка

```sql
SELECT * FROM name_db.name_table;
```

3. Начинаем фильтровать выборку

```sql
select user_name, coins from name_table;
```
Отображаем в результатах только эти столбцы.

4. С помощью ключевого слова ```WHERE``` мы так же можем указывать условия для выборки запроса.

```sql
select * from name_table WHERE coins>100;
```

5. Добавляем больше условий, ключевые слова ```AND```, ```IN```

```sql
select * from name_table WHERE coins > 10 AND lvl IN ('6', '12')
```
Выборка профилей, где монетки больше 10 и лвл равен 6 и 12.

* Для одого условия в выборке столбца достаточно писать просто ```AND lvl = 6```
* ```AND``` можно писать сколько угодно раз, сколько условий вам нужно

6. Аналогично, добавив в конструкцию значение ```NOT``` мы можем исключить из выборки картежи с данными условиями.

```sql
select * from name_table WHERE coins > 10 AND lvl NOT IN ('6', '12')
```

7. Что бы добавить запись в табилицу, неообходимо использовать ключевые слова ```INSERT INTO``` и далее перечислить значения для атрибутов в том же порядке, в каком они записаны в таблице.

```sql
INSERT INTO name_table VALUES (
    '128669482704',
    '56',
    '11',
    'NULL',
    'Shikaka',
    '0'
)
```

8. Если мы хотим выбирать не все колонки для вставки записи, то мы можем перечислить конкретные.

```sql
INSERT INTO name_table (user_id, coins, exp, lvl, user_name) VALUES (
'2342523523',
'500',
'25',
'56',
'Тестовый'
)
```

9. Обновление записей в таблице происходит с помощью ключевого слова ```UPDATE```. Мы так же указываем, какие именно поля будут обновлены при помощи ключевого слова ```SET```.

```sql
UPDATE name_table SET coins='0' WHERE user_id = '2342523523';
```
Данный запрос обновит в таблице name_table запись с user_id пользователя и установит там значение coins на 0.

10. Удаление данных из таблицы

```sql
DELETE FROM billing WHERE (payer_email is NULL OR payer_email = '') 
OR (recipient_email is NULL OR recipient_email = '');
```

Удаляем из таблицы все строки, в которых значения payer_email или recipient_email равный пустой строке или NULL


### Агрегация данных

1. С помощью функции ```count()``` можно посчитать количество строк в таблице.

```sql
SELECT COUNT(1) FROM name_table;
```

2. Подсчет среднего значения осуществляется с помощью функции AVG(), внутрь которой пишем нужный столбец.

```sql
SELECT AVG(coins) FROM name_table;
```

3. Подсчет среднего количества времени. Функция DATADIFF() - вычисляет разницу между днями.

```sql
SELECT finish_time, start_time,
    AVG(DATEDIFF(finish_time, start_time))
FROM name_table WHERE finish_time is not null;
```

Допустим ты хочешь подсчитать среднее время выполнения какого либо квеста в игре, сделав выборку среди всех игроков - то это изи делать этой строчкой кода.

4. Можем так же вывести в отчет макимальное и минимальное время, затраченное на выполнения квеста.

```sql
SELECT finish_time, start_time,
    AVG(DATEDIFF(finish_time, start_time)),
    MAX(DATEDIFF(finish_time, start_time)),
    MIN(DATEDIFF(finish_time, start_time))
FROM name_table WHERE finish_time is not null;
```

5. Для того, что бы сделать наш отчет более деталезированным, мы можем использовать группировку наших данных по значениям какого либо атрибута.

```sql
SELECT finish_time, start_time,
    AVG(DATEDIFF(finish_time, start_time)) as avg_time,
    MAX(DATEDIFF(finish_time, start_time)) as max_time,
    MIN(DATEDIFF(finish_time, start_time)) as min_time,
    name_user
FROM name_table WHERE finish_time is not null
group by name_user
order by avg_time DESC
LIMIT 100;
```
Так мы можем вывести всю эту статистику в разрезе для каждого игрока. К примеру у нас есть в игре какой то данж и мы можем посмотреть, как разные игроки проходят эти данжи. Выведем в верх списка игроков, которые больше всего в среднем затрачивают время на прохождения данжа.
* ```group by``` -  группирует отчет по определенным атрибутам
* ```order by``` - сортирует отчет, по возрастанию или алфавиту
* ```DESC``` - делает сортировку по убыванию, от большего к меньшему
* ```LIMIT 100``` - выводим список топ 100.
* ```SUM()``` - подсчитать самму атрибутов.


[Назад](../README.md)