<template>
<div class ="app-layout">
   <nav>
      <ul class="nav-links">
        <li><router-link to="/" >Smart Modeler</router-link></li>
        <li><router-link :to="{ name: 'home'}" >Home</router-link></li>
        <li><router-link :to="{ name: 'about'}" >About</router-link></li>
      </ul>
    </nav>
    <div class="page-container">
        <router-view/>
    </div>

    </div>
</template>

<script>
export default {
  name: 'BasicLayout',
}
</script>
