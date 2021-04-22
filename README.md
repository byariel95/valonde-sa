# Valonde-sa

## Contenido

la siguiente app contiene dos apliciones :

- Api (backend)
- text-app (frontend)

## Instalacion

### clonar el proyecto

```sh
git clone https://github.com/byariel95/valonde-sa.git
```

### Iniciar Api

1)desde el directorio raiz acceda al directorio Api y instale las dependencias.

```sh
cd Api
npm install
```

2)puede ejecutar la aplicacion con alguno de los siguientes comandos:

```sh
npm run start
o
npm run dev
```

una vez iniciada la aplicacion desplegara el siguiente mensaje:

```sh
Api listening http://localhost:4500/iecho?text=palabra
```

puede probar la ruta en un navegador o en un cliente como Postman, Insomnia, etc.

> Nota: al probar la ruta puede sustituir `palabra` por cualquier otro texto que desee.

#### correr test

en la ruta raiz de directorio Api/ correr el siguiente comando:

```sh
npm test
```

> Nota: la aplicacion debe estar ejecuntandose al momento de correr los tests.

### Iniciar text-app

desde el directorio raiz acceda al directorio text-app y instale las dependencias.

```sh
cd text-app
npm install
o
yarn install
```

para ejecutar la aplicacion ejecute alguno de los siguientes comandos:

```sh
npm run start
o
yarn start
```

> Nota: asegurese que la Api se este ejecutando.
