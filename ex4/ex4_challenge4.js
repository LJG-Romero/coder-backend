/* Imports */
const express = require('express');
// const res = require('express/lib/response');
const {Router} = express;
const data = require('./ex4_challengeDB');


/* Controllers */
/** Main test**/
// console.log(typeof data);
// console.log(data);
let btnRet = `<button onclick="location.href='/home'">Home</button>`

/** Data base **/
// const data = []
    /* test */
    // let assets = new db();
    // console.log(`Assets catch: ${assets.assets}`);

/** Server **/
const app = express();
const router = Router();

const PORT = 8080;
app.use('/home', router);
// app.use('/home', express.static('public'));

router.use(express.json())
router.use(express.urlencoded({extended: true}))

/** Server messages **/
const server = app.listen(PORT, () => {
    console.log(`Server standby, listening on port ${server.address().port}.`)
})

/** Server error handler **/
server.on('error', error => console.log(`Error: ${error}`))


/** Server petitions handlers **/
/*** Get ***/
router.get('/list', (req, res) => {
    let html = '';
    data.map( (product) => {
        let temp = `<div>
                        <p>Product id: ${product.id}</p>
                        <p>Product category: ${product.category}</p>
                        <p>Product name: ${product.name}</p>
                        <p>Product stock: ${product.stock}</p>
                    </div> 
                    <br>`
        // html = html + temp
        html += temp

    })
    html += btnRet
    
    res.send(html)
    // res.send(data);
    console.log(data)

});

router.get('/list/:id', (req, res) => {
    let id = parseInt(req.params.id);
    /* test */
    // console.log(typeof id);
    // console.log(`Id catch: ${id}`);

    let productRequired = data[id - 1];
    res.send(
        `<div>
            <p>Product id: ${productRequired.id}</p>
            <p>Product category: ${productRequired.category}</p>
            <p>Product name: ${productRequired.name}</p>
            <p>Product stock: ${productRequired.stock}</p>
        </div>
        ${btnRet}`
    );
    console.log(productRequired)
});

/*** Post ***/
router.post('/add', (req,res) => {

    // let counterId = ++data.length // prefix usage leads to push first an empty "newAssets" obj to arr. **** Issue to resolve ****
    let newAsset = {
        // id: counterId
        id: data.length + 1, 
        ...req.body
    }
    newAsset.stock = Number(newAsset.stock) // Provisory
    data.push(newAsset);
    
    res.send(`
        <div>
            <p>New data loaded.</p>
            <p>Id: ${data.length}</p>
            <p>Asset: ${JSON.stringify(newAsset)}</p>
            <button onclick="location.href='/home/list'">Show assets</button>
        </div>
        ${btnRet}
        `);
    console.log(data)

});

/*** Put ***/
router.put('/modify/:id', (req,res) => {
    let dataUploaded = req.body;
    let id = parseInt(req.params.id);
    data[id] = dataUploaded;
    res.send(`Data uploaded`);
});

/*** Delete ***/
router.delete('/delete/:id', (req,res) => {
    let id = parseInt(req.params.id);
    let trash = data.splice(id,1);
    res.send(`Delete complete.`)
    console.log(trash);
})