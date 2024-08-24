<script></script>


<template>
    <nav>

        <!-- Padding of 40px for the Nav-->

        <div id="nav-logo"> <RouterLink to="/"> <h2>Tabernacle of David</h2> </RouterLink> </div>
        
        <div id="nav-center"> 

            <RouterLink to="/about" ><div id="navs">About</div></RouterLink> 
            <RouterLink to="/our-lyrics"> <div id="navs">Our Lyrics</div> </RouterLink>
            <RouterLink to="/our-collection"> <div id="navs"> Our Collection</div></RouterLink>
            <RouterLink to="/write-lyrics"> <div id="navs"> Write Lyrics</div></RouterLink>
            
        
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
    padding: 40px;

    background-color: whitesmoke;
}

#navs
{
    display: flex;
    
}

#nav-logo
{
    width: 10%;
}

#nav-center
{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-wrap: wrap;
    gap: 50px;
}
</style>