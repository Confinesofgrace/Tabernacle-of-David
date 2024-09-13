<script>
import { db } from '../Firebase.js';
import { collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {
      lyricsList: [],
      searchQuery: '', // Store the search query
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
          ...doc.data(),
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
          lyrics: lyric.lyrics, // Pass full lyrics content (HTML)
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
  },
  computed: {
    // Filter lyrics based on the search query
    filteredLyrics() {
      return this.lyricsList.filter(lyric => 
        lyric.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        lyric.composer.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        lyric.lyrics.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <div id="ourcollection-frame">
    <div id="ourcollection-display">
      <h2>Our Collection</h2>
      <!-- Search input -->
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Find lyrics..." 
      />

      
      <div v-if="filteredLyrics.length" class="lyrics-grid">
        <div v-for="lyric in filteredLyrics" :key="lyric.id" class="lyric-item" @click="viewLyrics(lyric)">
          <div style="display: flex; align-items: baseline; gap: 30px;">
            <h3 style="font-size: 18px;">{{ lyric.title }}</h3>
            <p style="font-size: 16px;"><b>By:</b> {{ lyric.composer }}</p>
          </div>
          
          <div v-html="lyric.lyrics.slice(0, 100)"></div>...
          <div style="display: flex; gap: 30px;"> 
            <button @click.stop="editLyric(lyric)" class="edit-button">Edit</button>
            <button @click.stop="deleteLyric(lyric.id)" class="delete-button">
              <Icon icon="iconoir:delete-circle" style="font-size: 30px;"/>Delete
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No lyrics match your search.</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
#ourcollection-frame 
{
  padding: 0px 80px;
  /*background-color: #f9f9f9;*/
}

#ourcollection-display
{
  padding: 20px 0px;
  /*background-color: yellow;*/
}

h2 
{
  
  font-size: 50px;
}


input
  {
    width: 60%;
    padding: 10px 20px;
    margin: 30px 0px;
    border-style: none;
    border: 1px solid rgba(66, 7, 228, 0.26);

    border-radius: 16px;
    outline: none;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 95%  ;

    box-shadow: rgba(149, 157, 165, 0.137) 0px 4px 24px;
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
