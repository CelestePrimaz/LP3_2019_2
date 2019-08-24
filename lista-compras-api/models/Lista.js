class Lista {
    constructor(){
        this._id = ` ${ new Date().getMilliseconds() } `;
        this.nome = ' ';
        this.itens = [ ];
        
    }
}
module.exports = Lista;