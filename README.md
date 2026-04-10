# API Node + MongoDB + Railway

Proyecto base para una API de usuarios con:

- Node.js
- Express
- MongoDB Atlas con Mongoose
- Railway para despliegue

## Comandos

```bash
npm install
npm run dev
```

## Variables de entorno

Crea un archivo `.env` usando `.env.example` como guia:

```env
PORT=3000
MONGODB_URI=tu_cadena_de_conexion_de_mongodb_atlas
```

## Endpoints

### `GET /`
Verifica que la API esta activa.

### `GET /health`
Estado rapido del servicio.

### `GET /api/users`
Lista todos los usuarios.

### `POST /api/users`
Crea un usuario.

```json
{
  "nombre": "Ana",
  "correo": "ana@email.com",
  "password": "123456"
}
```

### `DELETE /api/users/:id`
Elimina un usuario por ID.

## Railway

En Railway debes configurar la variable `MONGODB_URI` con la misma cadena de MongoDB Atlas.
