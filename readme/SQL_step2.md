
### Запросы из нескольких таблиц

1. Делаем запрос на вывод данных из 2-ух таблиц сразу

```sql
SELECT * FROM name_table, name_table2;
```

2. Добавляем оператор ```cross join```

```sql
SELECT * FROM name_table CROSS JOIN name_table;
```

Результат выборки будет аналогичным.

3. Операция тета-соединения ```INNER JOIN```

```sql
SELECT t1.name, t2.name, t1.price 
    FROM name_table AS t1 
    INNER JOIN name_table2 AS t2
    ON t1.name_atribut = t2.name_atribut
```

Берем выборку из 2-ух таблиц с условием, что какой то атрибут из первой таблицы совпадает какому то атрибуту из второй. Удобно делать выборку по id.


[Назад](../README.md)