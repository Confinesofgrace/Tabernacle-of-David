<script></script>


<template>
    <nav>

        <!-- Padding of 40px for the Nav-->

        <div id="nav-logo"> 
            <RouterLink to="/"> <h2>Tabernacle of David</h2> </RouterLink> 
            
            <div id="hamburger"> 
                <hr id="hr-1">
                <hr id="hr-2">
                <hr id="hr-3">
            </div>
        </div>
        
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
    padding: 40px 80px;

    background-color: whitesmoke;
}

#navs
{
    display: flex;
    
}

#nav-logo
{
    /*background-color: yellow;*/
}

#nav-center
{
    display: flex;
    
    align-items: center;
    padding: 0px 40px;
    
    /*flex-wrap: wrap;*/
    gap: 50px;
    /*background-color: green;*/
}

#hamburger
{
    display: none
}

@media (max-width: 950px) 
{
    #nav-center
    {
        display: none;
    }

    #hamburger
    {
        display: block;
        padding: 10px ;
    }

    hr
    {
        width: 20px;
    }

    /*
    #hr-1
    {
        width: 15px;
    }
    */

    #hr-2
    {
        margin: 4px 0px;
    }

    #nav-logo
    {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>