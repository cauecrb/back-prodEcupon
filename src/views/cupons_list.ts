import Cupons from '../models/Cupons';

export default {
    render(cupon: Cupons){
        return{
         id: cupon.id,
         nome: cupon.nome,
         descricao: cupon.descricao,
         valor: cupon.valor
        };
    },

    renderMany(cupons: Cupons[]){
        return cupons.map(cupon => this.render(cupon));
    }

}