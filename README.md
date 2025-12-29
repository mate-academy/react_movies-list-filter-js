# Movies list - Filter

The `App`contains a `MoviesList` and a search field. Implement filtering using a `useState` hook.

> Here is [the working version](https://mate-academy.github.io/react_movies-list-filter/)

- On every change save the input value into the `query`;
- create a `visibleMovies` variable containing filtered movies;
- check if `movie.title` or `movie.description` contains `query`;
- ignore leading and trailing spaces;
- search should be case insensitive (`Inception` can be found by entering `inc` or `Inc` or even `iNC`).

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://artemstadnik.github.io/react_movies-list-filter-js/) and add it to the PR description.


# Список фільмів - Фільтр

`App` містить `MoviesList` та поле пошуку. Реалізуйте фільтрацію використовуючи хук `useState`.

> Ось [робоча версія](https://mate-academy.github.io/react_movies-list-filter/)

- При кожній зміні зберігайте значення введення в `query`;
- створіть змінну `visibleMovies`, що містить відфільтровані фільми;
- перевірте, чи `movie.title` або `movie.description` містить `query`;
- ігноруйте пробіли на початку та в кінці;
- пошук повинен ігнорувати регістр (`Inception` можна знайти ввівши `inc` або `Inc` або навіть `iNC`).

## Інструкції
- Встановіть розширення Prettier та використовуйте ці [налаштування VSCode](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) для автоматичного форматування при збереженні.
- Реалізуйте рішення, дотримуючись [настанов для React завдань](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Відкрийте ще один термінал та запустіть тести командою `npm test`, щоб переконатися, що ваше рішення правильне.
- Замініть `<your_account>` на ваше ім'я користувача Github в [ПОСИЛАННІ НА ДЕМО](https://artemstadnik.github.io/react_movies-list-filter-js/) та додайте його до опису PR.
