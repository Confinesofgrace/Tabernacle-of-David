<script setup>
import { ref } from 'vue';

const is_expanded = ref(false);

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
};
</script>

<template>
    <nav>
        <!-- Padding of 40px for the Nav-->
        <div id="nav-logo">
            <RouterLink to="/"> <h2 id="shortened">T o D</h2> </RouterLink>
            <RouterLink to="/"> <h2 id="full-name">Tabernacle of David</h2> </RouterLink>
            
            <div id="hamburger" @click="ToggleMenu" :class="{ active: is_expanded }"> 
                <hr id="hr-1">
                <hr id="hr-2">
                <hr id="hr-3">
            </div>
        </div>
        
        <div id="nav-center" :class="{ active: is_expanded }"> 
            <RouterLink to="/about"><div id="navs" @click="ToggleMenu" :class="{ active: is_expanded }">About</div></RouterLink> 
            <RouterLink to="/our-lyrics"><div id="navs" @click="ToggleMenu" :class="{ active: is_expanded }">Our Lyrics</div></RouterLink>
            <RouterLink to="/our-collection" @click="ToggleMenu" :class="{ active: is_expanded }"><div id="navs">Our Collection</div></RouterLink>
            <RouterLink to="/write-lyrics" @click="ToggleMenu" :class="{ active: is_expanded }"><div id="navs">Write Lyrics</div></RouterLink>    
        </div>
    </nav>
</template>

<style scoped>
a 
{
    color: black;
}

nav 
{
    display: flex;
    align-items: center;
    padding: 40px 80px;
    background-color: whitesmoke;
}

#navs 
{
    display: flex;
}

#nav-logo #shortened
{
    position: fixed;
    left: -100%;  
}

#nav-center 
{
    display: flex;
    align-items: center;
    padding: 0px 40px;
    gap: 50px;
    /*background-color: green;*/
}

#hamburger 
{
    display: none;
}

@media (max-width: 950px) 
{
    #nav-center 
    {
        padding: 30px 0px;
        position: fixed;
        left: -100%;
        top: 114px;
        right: 20%;
        width: 40%;
        flex-direction: column;
        gap: 30px;
        background-color: whitesmoke;
        text-align: center;
        z-index: 999;
        transition: 0.3s;
    }

    #nav-center.active 
    {
        left: 60%;
    }

    #hamburger 
    {
        display: block;
        cursor: pointer;
    
        /* Increase tap area*/
        padding: 8px;
    }

    #hamburger.active hr:nth-child(2) 
    {
        /*opacity: 0;*/
        width: 12px;
        transition: 0.3s;
    }

    #hamburger.active hr:nth-child(1) 
    {
        /*transform: translateY(10px) rotate(45deg);*/
        width: 8px;
        transition: 0.3s;
    }

    #hamburger.active hr:nth-child(3) 
    {
        /*transform: translateY(-10px) rotate(-45deg);*/
        transition: 0.3s;
    }

    hr 
    {
        width: 16px;
        margin: 3px 0px;
    }


    #nav-logo 
    {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}

@media (max-width: 600px) 
{
    #nav-logo 
    {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        transition: 0.3s;
    }

    #nav-logo #shortened
    {
        left: 20%;
        top: 40px;
        transition: 0.3s;
    }

    #nav-logo #full-name
    {
        /*display: none;*/
        position: fixed;
        left: -100%;
        transition: 0.3s;
    }
}
</style>
