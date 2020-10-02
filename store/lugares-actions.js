import * as FileSystem from 'expo-file-system';
export const ADD_LUGAR = 'ADD_LUGAR';
export const LISTA_LUGARES = 'LISTA_LUGARES';

import { inserirLugar, buscarLugares } from '../helpers/db'

export const addLugar = (nomeLugar, imagemURI) => {
  return async dispatch => {
    const nomeArquivo = imagemURI.split('/').pop();
    const novoPath = FileSystem.documentDirectory + nomeArquivo;
    try {
      await FileSystem.moveAsync({
        from: imagemURI,
        to: novoPath
      })
      const resultadoDB = await inserirLugar(
        nomeLugar,
        novoPath,
        'Torre Eiffel',
        48.8584,
        2.2945
      )
      console.log(resultadoDB);
      dispatch({ type: ADD_LUGAR, dadosLugar: { id: resultadoDB.insertId, nomeLugar: nomeLugar, imagemURI: novoPath } })
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const listarLugares = () => {
  return async dispatch => {
    try {
      const resultadoDB = await buscarLugares();
      console.log(resultadoDB);
      dispatch({ type: LISTA_LUGARES, lugares: resultadoDB.rows._array ? resultadoDB.rows._array : [] })
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
}




/*export const addLugar = (nomeLugar, imagemURI) => {
  return {
    type: ADD_LUGAR, dadosLugar: {nomeLugar: nomeLugar, imagemURI: imagemURI}
  }
}*/