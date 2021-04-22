# valonde-sa

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

acceda al directorio y instale las dependencias.

```sh
cd Api
npm install
```

puede ejecutar la aplicacion con los siguientes comandos:

```sh
npm run start
npm run dev
```

una vez iniciada la aplicacion desplegara el siguiente mensaje:

```sh
Api listening http://localhost:4500/iecho?text=palabra
```

puede probar la ruta en un navegador o en un cliente como Postman, Insomnia, etc.

> Nota: puede sustituir `palabra` por cualquier otro texto que desee.

#### correr test

en la ruta raiz de directorio Api/ correr el siguiente comando:

```sh
npm test
```

> Nota: la aplicacion debe estar ejecuntandose al momento de correr los tests.

### Iniciar text-app

acceda al directorio y instale las dependencias.

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
