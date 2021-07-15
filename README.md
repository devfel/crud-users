<p align="center">
  <a href="https://devfel.com/" rel="noopener">
 <img  src="https://devfel.com/imgs/devfel-logo-01.JPG" alt="DevFel"></a>
</p>

<h1 align="center">Users CRUD</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">

This application implements the CRUD (Create, Read, Update) for users. Also, it is possible to make a user an administrator, listing users only if the user you are requesting it as an administrator. <br/><br/>
This project was done using Javascript, Node, Express and it utilizes from the SOLID principles. Include project documentation with swagger.</p>

---

## 📝 Table of Contents

- [Application Features](#features)
- [Dependencies](#dependencies)
- [Built Using](#built_using)
- [Getting Started](#getting_started)
- [Acknowledgements](#acknowledgements)
- [Licenses](#licenses)
- [Authors](#authors)

---

## 🧐 Application Features <a name = "features"></a>

With this application the client can access the following routes<br/>

1. POST `/users` → list all repositories. <br/>
1. PATCH `/users/:user_id/admin` → change a user to be an admin. <br/>
1. GET `/users/:user_id` → list a specific user. <br/>
1. GET `/users` → list all users, need to be done by an admin. <br/>

- EXTRA: Documentation Route - `/api-docs` → swagger documentation of the project. <br/>

---

## 🔁 Dependencies <a name = "dependencies"></a>

Some project library dependencies includes but are not limited to:

- "cors": "^2.8.5",
- "express": "^4.17.1"
- "uuid": "^8.3.2"
- "jest": "^26.6.3",
- "nodemon": "^2.0.7",
- "swagger-ui-express": "^4.1.6",

---

## ⛏️ Built Using <a name = "built_using"></a>

- [JavaScript](https://www.javascript.com/) - Programming Language
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Insomnia](https://insomnia.rest/) - Rest Client

---

## 🏁 Getting Started <a name = "getting_started"></a>

You can clone the repository through Command Prompt or Terminal just by typing:

```sh
git clone https://github.com/devfel/crud-users.git
```

or download the zip from the green **"Code"** button.

Install dependencies packages with <b>yarn</b>

```sh
yarn
```

With the dependencies installed run <b>yarn dev</b> to bring up the server. To execute the tests run <b>yarn test</b>.

---

## 🎉 Acknowledgements <a name = "acknowledgements"></a>

- Created based on a [RocketSeat](https://rocketseat.com.br/) challenge.
- Full description in Brazilian Portuguese: [Trilha Node.js - Desafio 04](https://www.notion.so/Desafio-01-Introdu-o-ao-SOLID-3b9be286fac0482ca3b275473ddd2d72)

- Additional challenge, swagger documentation in Brazilian Portuguese: [Trilha Node.js - Desafio 05](https://www.notion.so/Desafio-02-Documentando-com-Swagger-8ce869ea608743e292851bd951f3239f)

---

## 📝 Liceses <a name = "licenses"></a>

- Distributed under the MIT License - see the [LICENSE.md](https://github.com/devfel/crud-users/blob/master/LICENSE.md) file for details.

---

## ✍️ Author <a name = "authors"></a>

- [@devfel](https://devfel.com/) - Luiz Flávio Felizardo
