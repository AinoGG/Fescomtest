# Fescomtest

```
npm install
```
```
npm run dev
```

## Задача №1 

Написано с применением Vue3 + TS

Библиотека для графиков [Vue3-Charts](https://vue3charts.org/)

Таблица на Флексах

Ответ: Легкие в использовании и простые в кастомизации решения, позволяют быстро разрабатывать нужный клиенту интерфейс

## Задача №2

Структура проекта: Основное это стейт менеджер (Здесь Pinia) Отдельный для каждого компонента, Отдельный репозиторий с запросами на сервер (Используется стандартный fetch).  По сути использую просто инфрастуктуру VUE с его роутами, сторами, компонентами.

## Задача №3

Сначала сделал возможность авторизации через форму, все работало, потом включилась защита. Пробовал через  mode: "no-cors" обойти
но все тщетно. Ну в общем чтобы не хранить данные у себя в коде решил сделать форму авторизации, можно было через .env просто вписывать данные (это отсылка на исключение секретов в Задаче №9). После успешной авторизации форма сменяется графиком.

## Задача №4

Токен получаю по запросу и записываю в ```localStorage```, дальше уже делаю запросы к query с хэдер параметром ``` Authorization: `Bearer ${localStorage.getItem('token')}` ```

## Задача №5

В общем то все реализовал, но 500 не дает работать, поэтому сделал фейк функцию с рандомными данными, чтобы получить хоть какой-то результат, единственное, что на макете графика не ясно что идет по оси Х, а что по Y, понимая, что у всех трех видов мощности разное вычисление решил, что лучше бы с бэкенда получать уже приведенные данные к единому виду, ну либо я не правильно понял как график этот сдедать, на мой взгляд недостаточно данных для его реализации. В общем сделал график как понял и реализовал обновление и ведение таблицы. Query функция тоже реализована но не могу проетстировать ее. Тут уже наверно становится понятно что я не подхожу, но я хотя бы постарался сделать хоть какой-то результат. 

Ну соответственно 6 7 8 9 задачи тоже выполнил с применением фейковой функции. По хорошему надо было написать вам, что сервер не дает делать запросы, но думаю там просто так настроено что я могу только 4 часа делать задание. 

