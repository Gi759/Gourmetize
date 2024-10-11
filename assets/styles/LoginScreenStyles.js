// assets/styles/LoginScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1C1C1E',  // Cor de fundo escura
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFA500', // Laranja forte para destacar o título
  },
  input: {
    height: 50,
    borderColor: '#333',  // Cor de borda mais escura para combinar com o tema
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#2C2C2E',  // Cinza escuro para os campos de entrada
    color: '#fff',  // Texto branco nos campos de entrada
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF4500',  // Vermelho escuro para os botões
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
  linkText: {
    color: '#FFA500',  // Laranja para o texto de registro
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
  },
});
