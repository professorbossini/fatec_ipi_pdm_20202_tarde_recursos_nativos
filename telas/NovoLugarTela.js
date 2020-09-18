import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

const NovoLugarTela = (props) => {
  const [novoLugar, setNovoLugar] = useState ('');
  const novoLugarAlterado = (texto) => {
    setNovoLugar (texto);
  }
  return (    
      <ScrollView>
        <View style={estilos.form}>
          <Text style={estilos.titulo}>Novo Lugar</Text>
          <TextInput 
            style={estilos.textInput}
            onChangeText={novoLugarAlterado}
            value={novoLugar}
          />
          <Button 
            title="Salvar lugar"
            onPress={() => {
              console.log(`Botão para adição de lugar clicado: ${novoLugar}`)
              setNovoLugar('')
            }}/>
        </View>
      </ScrollView>
  )
}

const estilos = StyleSheet.create({
  form: {
    margin: 30
  },
  titulo: {
    fontSize: 18,
    marginBottom: 12
  },
  textInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingVertical: 8
  }
});

export default NovoLugarTela;