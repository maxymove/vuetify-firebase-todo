<template>
  <v-app>
    <div>Todo page</div>
  </v-app>
</template>

<script>
import db from '../firebaseConfig';

export default {
  methods: {
    create() {
      // Add a new document in collection "cities"
      db.collection('cities')
        .doc('LA')
        .set({
          name: 'Los Angeles',
          state: 'CA',
          country: 'USA',
        })
        .then(() => {
          console.log('Document successfully written!');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    },
  },
  read() {
    const docRef = db.collection('cities').doc('SF');

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  },
  update() {
    const washingtonRef = db.collection('cities').doc('DC');

    // Set the "capital" field of the city 'DC'
    return washingtonRef
      .update({
        capital: true,
      })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  },
  delete() {
    db.collection('cities')
      .doc('DC')
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  },
};
</script>

<style>
</style>
