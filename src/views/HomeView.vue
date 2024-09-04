<script setup>
  import { Icon } from '@iconify/vue';

</script>

<template>

  
  <main>
    <div id="home-frame">
      

      <div id="home-display"> 
        <h2> Find lyrics in Our Collection</h2>
        
        <input type="text" placeholder="Find Lyrics"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
  #home-frame
  {
    
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(/src/assets/pexels-jplenio-2957860.jpg);
    background-size: cover;
    
    background-position: center;
    background-repeat: no-repeat;

  }

  #home-display
  {
    
    width: 100%;
    height: 400px;
    margin-bottom: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
  }

  input
  {
    width: 60%;
    padding: 14px 30px;
    margin: 20px;
    border-style: none;
    border: 1px solid rgba(66, 7, 228, 0.26);

    border-radius: 16px;
    outline: none;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 95%  ;

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }


</style>
