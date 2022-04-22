/* Imports */
const fs = require('fs');

/* Controllers */
class Database {
    constructor (filename){
        this.filename = filename
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
            let dataStrg = JSON.parse(data);
            // console.log(dataStrg);
            return dataStrg;
        }
        catch(err){
            console.log(`Ups, file missed ... Error: ${err}`);
        }
        
    }
    async deleteById(id){
        try{
            let data = await fs.promises.readFile(this.fileName, 'utf-8');
            let dataStrg = JSON.stringify(data);
            for (const product of dataStrg) {
                if (id === product.id){
                    let trash = dataStrg.splice(id,1);
                    console.log(`product eliminated`);
                }
            }
        }
        catch(err){
            console.log(`Ups, file missed ... Error: ${err}`);
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
/* Export */
module.exports = Database;