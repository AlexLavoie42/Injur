<template>
  <div class="container">
    <router-link to="EmployeeForm"><button class="button" style="vertical-align:middle">
      <span>Submit an Incident </span></button></router-link>

    <router-link to="Tip"><button class="button" style="vertical-align:middle">
      <span>Submit a Tip</span></button></router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style>
  .button {
    display: inline-block;
    border-radius: 4px;
    background-color: #61afe0;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 80%;
    transition: all 0.5s;
    cursor: pointer;
    margin: auto;
    margin-top: 1em !important;
    display:block;
    font-family: 'Open Sans', sans-serif;

  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .button span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .button:hover span {
    padding-right: 25px;
  }

  .button:hover span:after {
    opacity: 1;
    right: 0;
  }

</style>