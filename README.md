# Movies List – Filter (JS)

Aplicação em React que permite filtrar uma lista de filmes em tempo real a partir de um campo de busca.

[DEMO LINK](https://Igor-hrm.github.io/react_movies-list-filter-js/)

---

## Sobre o projeto

Este projeto implementa um sistema de busca dinâmica para uma lista de filmes.
O filtro funciona tanto pelo título quanto pela descrição, reagindo a cada alteração no campo de input.

A busca é tolerante a variações de caixa e espaços extras, garantindo uma melhor experiência de uso.

---

## Tecnologias utilizadas

- React
- JavaScript
- CSS
- GitHub Pages

---

## Funcionalidades implementadas

- Campo de busca controlado com `useState`
- Filtro em tempo real da lista de filmes
- Busca por título **ou** descrição
- Busca case insensitive
- Ignora espaços no início e no fim da busca
- Lista renderizada dinamicamente conforme o filtro

---

## Regras de funcionamento

- A cada alteração no input, o valor é salvo no estado `query`
- O texto digitado é tratado com `trim()` para remover espaços extras
- A comparação é feita usando texto em minúsculas
- Um filme é exibido se:
  - o título **ou**
  - a descrição
    contiver o texto pesquisado

---

## Conceitos praticados

- `useState`
- Componentização em React
- Filtros em arrays (`filter`)
- Manipulação de strings
- Renderização condicional
- Fluxo de dados controlados (controlled inputs)

---

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/Igor-hrm/react_movies-list-filter-js.git
```
