<template>
  <div id="writelyrics-frame">
    <div id="writelyrics-display">
      <input type="text" v-model="songTitle" placeholder="Song title" style="width:40%;margin-right:37%;" />
      <input type="text" v-model="composer" placeholder="Written by:" />
      <div><textarea v-model="lyrics" placeholder="Enter lyrics here" style="width:100%; height:350px; margin-top:20px;" /></div>
      <RouterLink to='/our-collection'> 
        <button @click="saveLyrics">Save Lyrics</button> 
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { db } from '../Firebase.js';
import { doc, updateDoc, addDoc, collection } from "firebase/firestore"; 

export default {
  data() {
    return {
      songTitle: this.$route.query.title || '',
      composer: this.$route.query.composer || '',
      lyrics: this.$route.query.lyrics || '',
      id: this.$route.query.id || null,
    };
  },
  methods: {
    async saveLyrics() {
      if (this.id) {
        // Update existing document
        try {
          await updateDoc(doc(db, "lyrics", this.id), {
            title: this.songTitle,
            composer: this.composer,
            lyrics: this.lyrics,
            updatedAt: new Date()
          });
          alert('Lyrics updated successfully!');
        } catch (e) {
          console.error("Error updating document: ", e);
          alert('Failed to update lyrics.');
        }
      } else {
        // Create new document
        try {
          await addDoc(collection(db, "lyrics"), {
            title: this.songTitle,
            composer: this.composer,
            lyrics: this.lyrics,
            createdAt: new Date()
          });
          alert('Lyrics uploaded successfully!');
        } catch (e) {
          console.error("Error adding document: ", e);
          alert('Failed to upload lyrics.');
        }
      }
      
      this.$router.push('/our-collection');
    }
  }
};

</script>

<style scoped>
#writelyrics-frame 
{
  display: flex;
  justify-content: center;
}

#writelyrics-display 
{
  width: 60%;
  /*background-color: whitesmoke;*/
  margin: 20px 0px;
  padding: 20px;
  gap: 50px;
}

input, textarea
{
  padding: 14px;
  border-style: none;
  border: 1px solid rgba(66, 7, 228, 0.26);
  border-radius: 16px;
  box-shadow: 2px 2px 4px rgba(14, 13, 13, 0.062);
  outline: none;
}

button 
{
  margin: 20px 0px;
  padding: 14px;
  border-style: none;
  border: 1px solid rgba(66, 7, 228, 0.26);
  border-radius: 16px;
    background-color:  rgba(66, 7, 228, 0.26);

    font-weight: 600;
  box-shadow: 2px 2px 4px rgba(14, 13, 13, 0.062);

  cursor: pointer;
}
</style>
