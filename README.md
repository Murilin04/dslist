# 🎮 DSList - Catálogo de Jogos

Projeto desenvolvido durante o **Intensivão Java com Spring Boot** da [DevSuperior](https://devsuperior.com.br), ministrado pelo Dr. Nélio Alves.

A aplicação é uma API REST que permite listar, consultar e reorganizar jogos de forma dinâmica, utilizando tecnologias modernas e boas práticas do ecossistema Java.

📌 O backend foi construído com base no conteúdo do curso, enquanto o **frontend foi desenvolvido por minha própria iniciativa**, utilizando **Angular standalone + Angular Material**, com foco em treinar o consumo de APIs REST e aplicar conceitos de front-end modernos.



---

## 📌 Funcionalidades

- 📋 Listagem de jogos
- 🔎 Consulta por ID
- 🗃️ Agrupamento de jogos por listas
- 🔀 Reordenação de jogos dentro da lista
- 🔗 API RESTful com padrão DTO

---

## 🚀 Tecnologias utilizadas

## Backend
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

 ## Frontend
- **Angular (Standalone Components)**
- **HTML**
- **CSS**
- **TypeScript**
- **Angular Router**

 ---

 ## Infraestrura e Suporte
- **Docker / Docker Compose (Postgres + PgAdmin)**
- **Postman Collection**
- **GitHub / Git**

---

### Modelo de domínio DSList

![dslist-model](https://github.com/user-attachments/assets/2351a359-0064-4fec-93c0-ab72b8cb8a39)


## 📁 🧠 Estrutura Backend
O projeto segue uma estrutura em camadas:

```

src/
├── main/
│ ├── java/com/devsuperior/dslist/    
│ │ ├── controllers/                     # Camada que expõe os endpoints da API (REST)
│ │ ├── dto/                             # Objetos de transferência de dados entre camadas
│ │ ├── entities/                        # Entidades que representam as tabelas do banco
│ │ ├── projections/                     # Interfaces para consultas customizadas no banco
│ │ ├── repositories/                    # Interfaces de acesso ao banco (Spring Data JPA)
│ │ └── services/                        # Camada de regra de negócio e lógica da aplicação
│ └── resources/
│ ├── application.properties             # Configuração padrão do Spring Boot
│ ├── application-dev.properties         # Configuração para o perfil de desenvolvimento
│ └── application-prod.properties        # Configuração para o perfil de produção
└── test/

```
## 📁 🧠 Estrutura Frontend
O projeto segue uma estrutura baseada em "feature-based structure"

```
frontend/
└── src/
├── app/
│ ├── features/                 # Funcionalidades principais da aplicação
│ │ ├── components/             # Componentes reutilizáveis (não roteáveis)
│ │ │ └── home/ 
│ │ ├── models/                 # Interfaces e tipos usados nas features
│ │ ├── pages/                  # Componentes de rota (páginas)
│ │ │ ├── game/
│ │ │ ├── game-collection/
│ │ │ └── gamelist/
│ │ └── services/               # Serviços de comunicação HTTP (API)
│ └── shared/                   # Componentes compartilhados entre features
│   └── header/                 # Header global (navbar, etc.)
└── assets/                     # Imagens estáticas utilizadas no frontend
└── img/ 

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

#### cd dslist/backend

### 2. Configure o banco de dados
Altere o arquivo application-dev.properties com suas credenciais PostgreSQL ou banco de preferência:
```
properties

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

## 🖥️ Frontend – Como executar

- **Node.js 16+**

- **Angular CLI instalado globalmente (opcional)**

```bash
npm install -g @angular/cli

```
ℹ️ O projeto utiliza Angular Material. A dependência já está incluída no package.json, mas se necessário, rode:

```bash
ng add @angular/material

```

### ✅ Instalar e iniciar

#### cd dslist/frontend
```
npm install
npm start

```

O frontend será aberto em: http://localhost:4200

## 🧪 Testando a aplicação

- Levante o backend e o banco de dados.

- Levante o frontend com npm install + npm start ou ng serve.

- Abra http://localhost:4200 e interaja com a interface.

- Use a Postman Collection para testar manualmente os endpoints:

O postman Collection esta localizado na pasta principal do projeto **DSList**

## 🔜 Próximos Passos / Melhorias
- Deploy com CI/CD
- Implementação de testes E2E 

#### 📚 Créditos
Projeto baseado no treinamento Intensivão Java com Spring Boot da DevSuperior, com o professor Nélio Alves.
Frontend criado por **Murilin04**

#### 🧾 Licença
Este projeto é para uso educacional e referência técnica.

#### 👨‍💻 Autor
Desenvolvido por Murilin04


