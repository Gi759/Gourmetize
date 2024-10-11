// assets/styles/WelcomeScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Aumentei a opacidade para destacar o texto
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFA500', // Alterado para laranja
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFD700', // Alterado para amarelo claro
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF4500', // Vermelho escuro para o botão
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonOutline: {
    borderColor: '#FFA500', // Laranja para o botão outline
    borderWidth: 2,
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#FFA500', // Texto do botão outline em laranja
    fontSize: 18,
    fontWeight: 'bold',
  },
});
