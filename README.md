# 🎮 DSList - Catálogo de Jogos

Projeto desenvolvido durante o **Intensivão Java com Spring Boot** da [DevSuperior](https://devsuperior.com.br), ministrado pelo Dr. Nélio Alves.

A aplicação é uma API REST que permite listar, consultar e reorganizar jogos de forma dinâmica, utilizando tecnologias modernas e boas práticas do ecossistema Java.


---

## 📌 Funcionalidades

- 📋 Listagem de jogos
- 🔎 Consulta por ID
- 🗃️ Agrupamento de jogos por listas
- 🔀 Reordenação de jogos dentro da lista
- 🔗 API RESTful com padrão DTO

---

## 🚀 Tecnologias utilizadas

- **Java 21**
- **Spring Boot 3.4.5**
- **Spring Web**
- **Spring Data JPA**
- **PostgreSQL** (prod/dev)
- **H2 Database** (testes)
- **Maven**
- **Docker / Docker Compose**
- **PgAdmin**

---

### Modelo de domínio DSList

![dslist-model](https://github.com/user-attachments/assets/2351a359-0064-4fec-93c0-ab72b8cb8a39)


## 📁 🧠 Arquitetura
O projeto segue uma estrutura em camadas:

```

src/
├── main/
│ ├── java/com/devsuperior/dslist/
│ │ ├── controllers/
│ │ ├── dto/
│ │ ├── entities/
│ │ ├── projections/
│ │ ├── repositories/
│ │ └── services/
│ └── resources/
│ ├── application.properties
│ ├── application-dev.properties
│ └── application-prod.properties
└── test/

```

---

## 🔧 Como executar o projeto localmente

### Pré-requisitos

- Java 21
- Maven
- PostgreSQL (ou Docker)



### 1. Clone o repositório

bash
git clone https://github.com/Murilin04/dslist.git

#### cd dslist

### 2. Configure o banco de dados
Altere o arquivo application-dev.properties com suas credenciais PostgreSQL ou banco de preferência:
```
properties
Copiar
Editar
spring.datasource.url=jdbc:postgresql://localhost:5433/dslist
spring.datasource.username=postgres
spring.datasource.password=1234567
✅ Dica: Use o arquivo import.sql para popular o banco automaticamente na primeira execução.

```

### ⚙️ Executar o projeto

Você pode executar com diferentes perfis:

```

🔹 Modo desenvolvimento (PostgreSQL)

bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev


🧪 Modo teste (H2 em memória)

bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=test


⚙️ Execução padrão (usa test se nenhum perfil for passado)

bash
./mvnw spring-boot:run

```

A API estará disponível em:
http://localhost:8080

Banco H2:
http://localhost:8080/h2-console/login.do


#### 📦 Perfis de Projeto
O projeto possui suporte a múltiplos ambientes:

test: Ambiente de testes, com H2

dev: Banco PostgreSQL local

prod: Banco PostgreSQL remoto 

#### 🧪 Endpoints principais
```
Método	Endpoint	Descrição
GET	/games	        Lista todos os jogos
GET	/games/{id}	Retorna os detalhes de um jogo
GET	/lists	        Lista todas as coleções de jogos
GET	/lists/{listId}/games	Lista jogos de uma coleção específica
POST	/lists/{listId}/replacement	Reorganiza a ordem dos jogos em uma coleção

```
### POST

**REQUEST**
```json
{
    "sourceIndex": 3,
    "destinationIndex": 1
}
```
