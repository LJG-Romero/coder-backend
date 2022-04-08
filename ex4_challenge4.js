/* Imports */
const express = require('express');
const res = require('express/lib/response');
const {Router} = express;
const data = require('./ex4_challengeDB');

/* Controllers */
/** Data base **/
    /* test */
    // let assets = new db();
    // console.log(`Assets catch: ${assets.assets}`);
console.log(typeof data);
console.log(data);


/** Server **/
const app = express();
const router = Router();

const PORT = 8080;
app.use('/home/api', router);
app.use('/home', express.static('public'));

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
router.get('/products', (req, res) => {
    /* test */
    // res.send(
        // data.map( (product) => {
        //     `<div>
        //         <p>Product id: ${product.id}</p>
        //         <p>Product category: ${product.category}</p>
        //         <p>Product name: ${product.name}</p>
        //         <p>Product stock: ${product.stock}</p>
        //     </div>`
        // })
    // )
    res.send(data);
});

router.get('/products/:id', (req, res) => {
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
        </div>`
    );
});

/*** Post ***/
router.post('/products', (req,res) => {
    let newData = req.body;
    console.log(req.body);
    // let newAsset = {
    //     id: data.length ++,
    //     category: data
    // }
    // data.push(newData);
    // res.send(`
    //     New data loaded.
    //     Id: ${data.length}
    //     Asset: ${newData}
    //     `);
});

/*** Put ***/
router.put('/products/:id', (req,res) => {
    let dataUploaded = req.body;
    let id = parseInt(req.params.id);
    data[id] = dataUploaded;
    res.send(`Data uploaded`);
});

/*** Delete ***/
router.delete('/products/:id', (req,res) => {
    let id = parseInt(req.params.id);
    let trash = data.splice(id,1);
    res.send(`Delete complete.`)
    console.log(trash);
})