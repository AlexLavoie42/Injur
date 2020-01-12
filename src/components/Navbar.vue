<template>
  <div class="header">
    <router-link to="/"><img src="../assets/image.png" id="hatLogo"></router-link>
    <h1 id="companyName"> Injur </h1>
    <div class="header-right">
      <div class="dropdown">
        <template v-if="user.loggedIn">
          <button class="dropbtn">{{user.data.displayName}}
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="reports">Incidents</router-link>
            <a @click.prevent="signOut">Sign Out</a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "login"
          });
        });
    }
  }
};
</script>

<style>
  body {
    background-color: #f4fafd;

  }
  .header {
    overflow: visible;
    background-color: #c3e1f3;

    display: flex;
    justify-content: flex-start;
  }
  .header a {
    float: left;
    color: black;
    text-align: center;

    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }
  .navbar {
    overflow: visible;
    background-color: #333;
    font-family: Arial;
  }

  /* Links inside the navbar */
  .navbar a {
    float: left;
    font-size: 16px;
    color: black;
    text-align: center;
    vertical-align: bottom;
    text-decoration: none;

  }
  #hatLogo {
    width: 6em;
    height: 6em;
  }
  #companyName {
    flex:2;
    font-size: 2.5em;
    text-align: center;
    margin-top: 0.575em;
    font-family: 'Open Sans', sans-serif;
  }
  #bell {
    height: 1.5em;
    width: 1.5em;
    margin-top: 4em;
    margin-right: 0.5em;
  }
  /* The dropdown container */
  .dropdown {
    flex:2;
    text-align: center;
    font-family: 'Open Sans', sans-serif
  }

  /* Dropdown button */
  .dropdown .dropbtn {
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    border: none;
    outline: none;
    margin-top: 3em;
    color: black;
    flex: 3;

    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
  }

  /* Add a red background color to navbar links on hover */
  .navbar a:hover, .dropdown:hover .dropbtn {
    background-color: red;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    font-family: 'Open Sans', sans-serif;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add a grey background color to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .header-right {
    float: left;
  }

</style>
