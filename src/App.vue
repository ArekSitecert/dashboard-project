<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col"><router-link to="/AssetByLocation">Asset by Location</router-link></div>
        <div class="col"><router-link to="/SearchByCategory">Search By Category</router-link></div>
        <div class="col"><router-link to="/AtRisk">At Risk</router-link></div>
        <div class="col"><router-link to="/OSHE">OSHE</router-link></div>
        <div class="col"><router-link to="/Testing">Testing</router-link></div>
      </div>
    </div>
    <div class="container-fluid">
          <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; //#D9E0E7 <- between dashboard tiles shading
  margin-top: 60px;
}

#nav {
  padding: 40px 40px 40px;

  a {
    font-weight: bold;
    color: #001936;
    
    &.router-link-exact-active {
      color: #EA5B0C;
    }
  }
}

#span {
  padding: 10px;
  font-weight: bold;
  color: #001936;
  float: right;
}
</style>