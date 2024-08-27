
<script>
import { db } from '../Firebase.js';
import { collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {
      lyricsList: [],
    };
  },
  mounted() {
    this.fetchLyrics();
  },
  methods: {
    fetchLyrics() {
      const q = query(collection(db, "lyrics"));
      onSnapshot(q, (querySnapshot) => {
        this.lyricsList = querySnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data()
        }));
      });
    },
    editLyric(lyric) {
    this.$router.push({ 
      path: '/write-lyrics', 
      query: {
        id: lyric.id,
        title: lyric.title,
        composer: lyric.composer,
        lyrics: lyric.lyrics
      }
    });
  },
    async deleteLyric(id) {
      if (confirm("Are you sure you want to delete this lyric?")) {
        try {
          await deleteDoc(doc(db, "lyrics", id));
          alert("Lyric deleted successfully!");
        } catch (e) {
          console.error("Error deleting document: ", e);
          alert("Failed to delete lyric.");
        }
      }
    },

    viewLyrics(lyric) {
    this.$router.push({ 
      path: `/lyrics/${lyric.id}`,
    });
  },
    

  }
};
</script>



<template>
  <div id="ourcollection-frame">
    <div id="ourcollection-display">
      <h2>Our Collection</h2>
      <div v-if="lyricsList.length" class="lyrics-grid">

        <!-- 
        I removed the index- it was flagging it as 'defined but never used'
        
        <div v-for="(lyric, index) in lyricsList" :key="lyric.id" class="lyric-item"> 
        
        
        -->
        <div v-for="(lyric) in lyricsList" :key="lyric.id" class="lyric-item" @click="viewLyrics(lyric)">
          <h3>{{ lyric.title }}</h3>
          <p><strong>Written by:</strong> {{ lyric.composer }}</p>
          <p>{{ lyric.lyrics.slice(0, 100) }}...</p>
          <div style="display: flex;"> 
            <button @click.stop="editLyric(lyric)" class="edit-button">Edit</button>
            <button @click.stop="deleteLyric(lyric.id)" class="delete-button"> 
              <Icon icon="iconoir:delete-circle" style="font-size: 30px;"/>Delete
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No lyrics available. Upload some lyrics to see them here.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#ourcollection-frame 
{
  padding: 20px;
  background-color: #f9f9f9;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.lyrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.lyric-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.lyric-item h3 {
  margin-top: 0;
}

.lyric-item p {
  margin-bottom: 10px;
}

.delete-button 
{
  /*background-color: #e74c3c; */

  display: flex;
  align-items: center;
  color: rgb(7, 7, 7);
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;
  
  font-size: 12px;

}

.delete-button:hover 
{
  background-color: #c0392b;
}

.edit-button 
{
  background-color: #2bc050;
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;
  
  font-size: 12px;
}

.edit-button:hover 
{
  background-color: #2bc050;
}
</style>
