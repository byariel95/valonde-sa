const expect = require('chai').expect;
const request = require('supertest')('http://localhost:4500')

describe('pruebas a la Api ', ()=>{

    it('debe retornar el status code 200 que la peticion se realizo correctamente', async () =>{
        const response = await request.get('/iecho').query({text: 'palabra'})
        expect(response.status).to.eql(200)
    }) 

    it('debe retornar el texto alrevez', async () =>{

        const text = 'palabras'
        const reverseText = text.split('').reverse().join(''); 
        const response = await request.get('/iecho').query({text: text})
        expect(response.body.text).to.eql(reverseText)
    }) 

})
