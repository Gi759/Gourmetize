import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,  
    height: 120, 
    borderRadius: 60, 
    marginBottom: 20,
    borderColor: '#FF6347', 
    borderWidth: 3,
  },
  username: {
    fontSize: 24,  
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: '#FF4500',
    padding: 12,  
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,  
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  favoriteList: {
    marginBottom: 20,
  },
  favoriteItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  favoriteImage: {
    width: windowWidth * 0.35,  
    height: windowHeight * 0.2,  
    borderRadius: 10,
    marginBottom: 5,
  },
  favoriteName: {
    color: '#fff',
    fontSize: 14,  
  },
});
