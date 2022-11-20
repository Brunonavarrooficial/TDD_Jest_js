# TDD

> #### Status: Developing
>
> ##### Realizando testes de TDD com Jest na aplicação Js

## Test-Driven Development

<img src="https://dkrn4sk0rn31v.cloudfront.net/2019/11/04105020/img-tdd.png" width="400" height="400"/>

---

| Tecnologias | 💻  |
| ----------- | --- |

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="40"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" width="40"/>

---

```

npm install --save-dev jest

```

Dependencias e Script no `**[package.json]**` 👇

```
"devDependencies": {
    "jest": "^29.3.1"
}

```

```
{
  "scripts": {
    "test": "jest"
  }
}
```

---

> Testando as funções do arquivo:
> `my-code.js`

```
module.exports = { sum, inOneHour }
```

> Usando mock em uma das funções no arquivo:
> `my-code.test.js`

mock em **Date.now**

função para teste incluindo zero:

`jest.fn(() => 0)`

> Função completa:

```
describe('time functions', () => {
    it('returns the timestamp for one hour ahead', () => {
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow
    })
})
```
