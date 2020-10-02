import { ADD_LUGAR, LISTA_LUGARES } from "./lugares-actions";
import  Lugar  from '../modelo/Lugar'

const estadoInicial = {
  lugares: []
};

export default (estado = estadoInicial, action) => {
  switch (action.type){
    case ADD_LUGAR:
      console.log (action);
      const lugar = new Lugar (action.dadosLugar.id.toString(), action.dadosLugar.nomeLugar, action.dadosLugar.imagemURI )
      return {
        lugares: estado.lugares.concat(lugar)
      }
    case LISTA_LUGARES:
      return {
        lugares: action.lugares.map(l => new Lugar (l.id.toString(), l.nomeLugar, l.imagem))
      }
    default:
      return estado;
      
  }
}