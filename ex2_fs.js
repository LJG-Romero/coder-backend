const fs = require('fs');
// const { json } = require('stream/consumers');

class Container {
    constructor (fileName){
        this.fileName = fileName;
    }
    async saveData(data){
        try{
            await fs.promises.writeFile(this.fileName, JSON.parse(data));
            console.log('saved!');
        }
        catch(err){
            console.log(`Ups, file missed ... Error: ${err}`);
        }
    }
    async getById(id){
        try{
            let data = await fs.promises.readFile(this.fileName, 'utf-8');
            let dataStrg = JSON.stringify(data);
            for (const product of dataStrg) {
                if (id === product.id){
                    console.log(product);
                }
            }
        }
        catch(err){
            console.log(`Ups, file missed ... Error: ${err}`);
        }
    }
    async getAll() {
        try{
            let data = await fs.promises.readFile(this.fileName, 'utf-8');
            let dataStrg = JSON.stringify(data);
            console.log(dataStrg);
        }
        catch(err){
            console.log(`Ups, file missed ... Error: ${err}`);
        }
        
    }
    async deleteById(id){
        let data = await fs.promises.readFile(this.fileName, 'utf-8');
        let dataStrg = JSON.stringify(data);
        for (const product of dataStrg) {
            if (id === product.id){
                let trash = dataStrg.splice(id,1);
                console.log(`product eliminated`);
            }
        }

    }
    async deleteAll(){
        try{
            await fs.promises.writeFile(this.fileName, '[]');
            console.log('boom !');
        }
        catch(err){
            console.log(`Ups, file missed ... Error: ${err}`);
        }
    }
}

console.log(`Hi fellows ! Welcome to the ex. 2 ...`);
let on_Off = prompt(`Let's continue? ... Y / N`);
while (on_Off === "y" || on_Off === "Y"){
    let fileName = prompt(` Add up the file name: `);
    let foo = new Container(fileName);
    let optionSelected;
    do{
        optionSelected = prompt(`Select your tool (1-5): \n
        1- Save Data,
        2- Get file by ID,
        3- Get all files,
        4- Delete file by ID,
        5- Delete all.     *** WARNING *** 
        `)
        switch(optionSelected){
            case '1':
                let stock = [{
                    name: 'Pure Drive',
                    brand: 'Babolat',
                    id: 1
                },
                {
                    name: 'Speed',
                    brand: 'Head',
                    id: 2
                },
                {
                    name: 'Pro Staff RF97',
                    brand: 'Wilson',
                    id: 3
                }
                ]
                foo.saveData(stock);
                break;
            case '2':
                foo.getById(1);

                break;
            case '3':
                foo.getAll();
                break;
            case '4':
                foo.deleteById(3);
                break;
            case '5':
                foo.deleteAll();
                break;
            default:
                console.error(`Come one, seriously? You can do it better, let's try one more shot ! `);
        }
    }
    while (typeof optionSelected !== 'number' );
    on_Off = prompt(`Let's continue? ... Y / N`);
} 
console.log(`See you later budy !`);