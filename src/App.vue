<template>
  <div id="app">
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal">Leiloeiro</h5>
      <router-link class="btn btn-outline-primary" to="/leilao">Novo leilão</router-link>
    </div>
    <router-view />
  </div>
</template>
