# 🐳 CP2 - Docker | Integração API + Banco de Dados

## 👥 Integrantes

* Carlos Eduardo R C Pacheco - RM 557323
* João Pedro Amorim Brito Virgens - RM 559213
* Pedro Augusto Costa Ladeira - RM 558514

---

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo demonstrar a utilização de containers Docker para execução de uma aplicação com comunicação entre serviços.

Foram utilizados:

* Container de API (Node.js)
* Container de Banco de Dados (MySQL)
* Rede Docker para comunicação entre containers
* Volume nomeado para persistência de dados

---

## 🏗️ Arquitetura

```
[ API Node.js ]  --->  [ MySQL ]
       |                    |
   Porta 3000         Porta 3306
```

---

## 🧰 Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* Docker

---

## ⚙️ Pré-requisitos

* Docker Desktop instalado e em execução

---

## 🚀 Como Executar o Projeto

### 🔹 1. Criar rede Docker

```bash
docker network create rede-cp2
```

---

### 🔹 2. Criar volume

```bash
docker volume create volume-mysql
```

---

### 🔹 3. Subir o container do MySQL

```bash
docker run -d --name mysql-557323 --network rede-cp2 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=meubanco -v volume-mysql:/var/lib/mysql -p 3306:3306 mysql:8
```

---

### 🔹 4. Subir o container da API (sem Dockerfile)

```bash
docker run -d --name api-557323 --network rede-cp2 -p 3000:3000 -v ${PWD}:/app -w /app node:18 sh -c "npm install && node app.js"
```

---

## 🌐 Acesso à Aplicação

A API estará disponível em:

```
http://localhost:3000
```

---

## 🔄 Endpoints da API (CRUD)

### ➤ Criar usuário (CREATE)

```
POST /usuarios
```

Body:

```json
{
  "nome": "Exemplo"
}
```

---

### ➤ Listar usuários (READ)

```
GET /usuarios
```

---

### ➤ Atualizar usuário (UPDATE)

```
PUT /usuarios/{id}
```

Body:

```json
{
  "nome": "Novo Nome"
}
```

---

### ➤ Deletar usuário (DELETE)

```
DELETE /usuarios/{id}
```

---

## 🗄️ Acesso ao Banco de Dados

Para acessar o MySQL via terminal:

```bash
docker exec -it mysql-557323 mysql -u root -p
```

Senha:

```
root
```

Comandos:

```sql
USE meubanco;
SELECT * FROM usuarios;
```

---

## 🧪 Evidência de Funcionamento

A aplicação permite:

* Inserção de dados no banco
* Consulta de registros
* Atualização de dados
* Exclusão de registros

As operações podem ser verificadas tanto via API quanto diretamente no banco de dados.

---

## 📸 Comandos Docker Utilizados

```bash
docker ps
docker images
docker volume ls
docker network ls
```

---

## 🎥 Demonstração

* Vídeo no YouTube: [INSERIR LINK AQUI]

---

## 🔗 Repositório

* GitHub: [INSERIR LINK AQUI]

---

## ✅ Conclusão

O projeto demonstra com sucesso a utilização de containers Docker para execução de aplicações distribuídas, com comunicação entre serviços, persistência de dados e execução de operações CRUD.
