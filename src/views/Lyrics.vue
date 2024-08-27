<template>

    <div id="lyrics-frame"> 
        <div id="lyrics-display">
            <div style="display: flex; align-items: center; gap: 30%;"> 
                <h2>{{ lyric.title }}</h2>
                <p><strong>Written by:</strong> {{ lyric.composer }}</p> 
            </div>
            
            <p>{{ lyric.lyrics }}</p>
            <RouterLink to="/our-collection"><button>Back to Our Collection</button></RouterLink>
        </div>

    </div>
    
  </template>
  
  <script>
  import { db } from '../Firebase.js';
  import { doc, getDoc } from "firebase/firestore";
  
  export default {
    props: ['id'],
    data() {
      return {
        lyric: null
      };
    },
    async created() {
      const docRef = doc(db, "lyrics", this.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.lyric = docSnap.data();
      } else {
        console.log("No such document!");
      }
    }
  };
  </script>
  
  <style scoped>
  #lyrics-frame 
  {
    display: flex;
    justify-content: center;
  }
  
  #lyrics-display 
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
  