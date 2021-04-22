## Iniciar Api

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
