const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 4500;

app.use(cors());
app.use(express.json());

 app.get('/iecho', (req, res) => {
    const param = req.query.text;
    if (param) 
    {
        const text = param.toLocaleLowerCase();
        const reverseText = text.split('').reverse().join('');
        
        text === reverseText ? 
        res.status(200).send([{"text": reverseText,"palindrome": true}]) : 
        res.status(200).send([{"text": reverseText,"palindrome": false}]);

    } else
    {
        res.status(400).send({
            "error": "no text"
        })
    }
 })





app.listen(PORT,()=> {
    console.log(`Api listening http://localhost:${PORT}/iecho?text=palabra`);
})