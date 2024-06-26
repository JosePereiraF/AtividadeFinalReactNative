import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cards: {
    flex: 1,
    marginTop: 18,
    marginStart: 2,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  cardNome: {
    height: 50,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 27,
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 1,
    marginStart: 2,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  cardNome2: {
    height: 50,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 27,
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 25,
    marginStart: 2,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  card: {
    height: 50,
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginStart: 2,
    marginHorizontal: 2,
    marginVertical: 5,
  },
  cardText: {
    fontSize: 20,
    textAlign: 'left',
  },
});

export default styles;