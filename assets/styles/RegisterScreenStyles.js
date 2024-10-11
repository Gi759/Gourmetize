// assets/styles/RegisterScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1c1c1e', // Fundo escuro
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFA500', // Título em laranja
  },
  input: {
    height: 50,
    borderColor: '#444', // Borda mais escura para harmonizar com o tema
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#2c2c2e', // Fundo dos inputs em cinza escuro
    color: '#fff', // Texto branco nos inputs
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF4500', // Botão vermelho escuro
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
