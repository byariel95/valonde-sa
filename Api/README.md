### Iniciar Api

1. desde el directorio raiz acceda al directorio Api y instale las dependencias.

```sh
cd Api
npm install
```

2. puede ejecutar la aplicacion con alguno de los siguientes comandos:

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
