import Produtos from '../models/Products';

export default {
    render(prod: Produtos){
        return{
            id: prod.id,
            nome: prod.nome,
            descricao: prod.descricao,
            cupons: prod.cupons,
        };
    },

    renderMany(prods: Produtos[]){
        return prods.map(prod => this.render(prod));
    }

}