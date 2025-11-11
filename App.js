import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// 🔹 Composant enfant qui reçoit la liste via les props
const ListeNoms = ({ noms }) => {
  return (
    <FlatList
      data={noms}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={styles.nomItem}>{item.nom}</Text>
      )}
    />
  );
};

// 🔹 Composant principal
const App = () => {
  const [noms, setNoms] = useState([
    { id: 1, nom: 'Manal' },
    { id: 2, nom: 'Ferdaousse' },
   
  ]);

  // Fonction pour ajouter un nouveau nom
  const ajouterNom = () => {
    const nouveauNom = { id: noms.length + 1, nom: `Nom ${noms.length + 1}` };
    setNoms([...noms, nouveauNom]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Liste des Noms</Text>
      {/* 🔸 Envoi de la liste au composant enfant via props */}
      <ListeNoms noms={noms} />
      <Button title="Ajouter un nom" onPress={ajouterNom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  nomItem: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default App;
