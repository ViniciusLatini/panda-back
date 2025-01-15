# Desafio Panda API 🐼

Este projeto é um desafio técnico que consiste na criação de uma API com Node.js e Express, que apresenta as seguintes funcionalidades:

- Autenticação JWT e validação de token para autorizar requisições.
- Listagem de vídeos com cache e edição de vídeos, utilizando bancos de dados relacionais e de cache.
- Edição de título e descrição dos vídeos.
- Utilização de Docker

## Tecnologias utilizadas 🛠️

- Node.js
- Express
- Prisma
- Postgres
- Redis
- Docker

## Getting started 🚀

### 1. Configure a chave da API panda

Insira sua chave API da sua conta Panda Vídeo como variável de ambiente em um `.env`. Por motivos de segurança essa chave não é salva no banco de dados ao criar uma conta na aplicação.

Exemplo:

```
PANDA_KEY=panda-secret
```

### 2. Executar API

Digite o seguinte comando para executar a API e subir o Docker:

```bash
docker-compose up --build
```

## Utilizando a API 🌐

Você pode acessar a API do servidor usando os seguintes endpoints:

### `GET`

- `/status`: Endpoint de teste para verificar se a API está em funcionamento
  - Retorno
    ```json
    {
      "status": "string"
    }
    ```
- `/videos`: Busca todos os vídeos de um usúario a partir da sua panda API key
  - Retorno
    ```json
    {
      "video": {
        "id": "string",
        "title": "string",
        "description": "string",
        "status": "string",
        "user_id": "string",
        "folder_id": "string | null",
        "library_id": "string",
        "live_id": "string | null",
        "video_external_id": "string",
        "converted_at": "string",
        "created_at": "string",
        "updated_at": "string",
        "storage_size": "number",
        "length": "number",
        "video_player": "string",
        "video_hls": "string",
        "width": "number",
        "height": "number",
        "playable": "boolean",
        "backup": "boolean",
        "preview": "string",
        "thumbnail": "string",
        "playback": "string[]",
      },
      "pages": "number",
      "total": "number",
    }
    ```
- `/videos/:id`: Busca todas as informações do vídeo a partir do seu `id`
  - Retorno
    ```json
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "status": "string",
      "user_id": "string",
      "folder_id": "string | null",
      "library_id": "string",
      "live_id": "string | null",
      "video_external_id": "string",
      "converted_at": "string",
      "created_at": "string",
      "updated_at": "string",
      "storage_size": "number",
      "length": "number",
      "video_player": "string",
      "video_hls": "string",
      "width": "number",
      "height": "number",
      "playable": "boolean",
      "backup": "boolean",
      "preview": "string",
      "thumbnail": "string",
      "playback": "string[]",
    }
    ```

### `POST`

- `/users`: Cria novo usuário
  - Body:
    - `email: String` (obrigatório)
    - `password: String` (obrigatório)
- `/users/auth`: Autenticação do usuário
  - Body:
    - `email: String` (obrigatório)
    - `password: String` (obrigatório)
  - Retorno:
    ```json
    {
      "token": "string",
      "id": "number",
      "email": "string"
    }
    ```

### `PUT`

- `/videos/:id`: Altera o título e descrição do vídeo
  - Body:
    - `title: String`
    - `description: String`
