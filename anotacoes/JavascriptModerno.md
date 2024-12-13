# Introdução a JavaScript Moderno (ES6)

#### ✨ O que é JS ES6
> - Uma versão "nova" de JavaScript que trouxe diversas funcionalidades;
> - São os conhecimentos base para aprender os frameworks modernos (React, Vue e etc);
> - Agilizam o desenvolvimento de JavaScript puro. 

#### 🛠️ Variáveis com let e const
> - A `let` é semelhante ao var, porém, cada bloco que o manipular registra um valor próprio;
> - A constante é declarada por `const`, e segue a mesma lógica de let;
> - `var` é utilizada para variáveis globais (pode ser alterada nos blocos).

**Exemplo:**
```javascript
// var
var x = 10
var y = 15

if(y > 10){
    let x = 5
    console.log(x)
}

console.log(x)

// let
var a = 10
var b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

// let
let i = 100

for (let i=0; i < 5; i++){
    console.log(i)
}

console.log(i)
```

#### 🛠️ Arrow Functions
> - É um recurso para criar funções de forma mais simples;
> - Não funciona exatamente como uma função em todos os aspectos;
> - O this da arrow function é relacionado ao elemento pai de quem está executando.

**Exemplo:**

```javascript
// função tradicional
const sum = function sum(a, b){
    return a + b
}

// arrow function
const arrowSum = (a, b) =>{
    return a + b
}
// const arrowSum = (a, b) =>{ a + b }
// const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

// this na arrow function

const user = {
    name : "Ruan",

    // função tradicional para encontrar o elemento pai
    sayUserName(){
        var self = this
        setTimeOut(function(){
            console.log("Username; " + self.name)
        }, 500)
    },

    // arrow function para encontrar o elemento pai
    sayuserNameArrow() {
        setTimeOut(() => {
            console.log("Username; " + this.name)
        }, 500)
    }
}

user.sayUserName()
user.sayUserNameArrow()
```

#### 🛠️ Filter
> - Método de array para filtrar dados, baseado em alguma condição estabelecida.

**Exemplo:**

```javascript
const arr = [1,2,3,4,5]

const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n
    }
})

console.log(highNumbers)

//===

const users = [
    { name : 'Fulano', available : true},
    { name : 'Ciclano', available : true},
    { name : 'Beltrano', available : false}
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)
```

#### 🛠️ Map
> - Também é um método de array;
> - Utilizado para modificar os dados do array.

**Exemplo:**

```javascript
const products = [
    { name : 'Camisa', price : 10.99, category : 'Roupas' },
    { name : 'Chaleira elétrica', price : 50.99, category : 'Eletro' },
    { name : 'Fogão', price : 150.99, category : 'Eletro' },
    { name : 'Calça Jeans', price : 15.99, category : 'Roupas' }
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)
```

#### 🛠️ Template literals
> - Permite concatenar uma string de forma mais simples;
> - Permite colocar as variáveis entre o texto;
> - A string fica entre: ``;
> - As variáveis são inseridas desta maneira: ${variavel}.

**Exemplo:**

```javascript
const userName = 'Ruan'
const age = 19

console.log(`Usuário ${userName} possui ${age} anos.`)
```

#### 🛠️ Destructuring
> - Recurso que pode ser utilizado para transformar arrays e objetos;
> - Simplificar a declaração de n variáveis para apenas 1 linha.

**Exemplo:**

```javascript
// array
const fruits = ["Maçã", "Laranja", "Mamão"]
const [f1, f2, f3] = fruits

console.log(f1)

// objetos
const productDetails = {
    name : "Mouse",
    price : 39.99,
    category : "Periféricos",
    color : "Cinza"
}

const {name: productName, price, category, color} = productDetails
console.log(`O produto ${productName}, custa R$${price}.`)
```

#### 🛠️ Spread operator
> - Também utilizado em arrays e objetos;
> - Utilizado para constituir novos valores destes dados em outros arrays e objetos.

**Exemplo:**

```javascript
// array
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

// objeto
const carName = {name : 'Gol'}
const carBrand = {brand : 'VW'}
const otherInfos = {km : 10000, price : 79000.00}

const car = {...carName, ...carBrand, ...otherInfos, wheels : 4}

console.log(car)
```