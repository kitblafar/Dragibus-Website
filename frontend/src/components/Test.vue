<template>
  <div>
    <b-jumbotron class="jumbotron">
      <template #header>The Test</template>

      <template #lead>
        The test is simple but effective... Simply taste each flavour of Dragibus ONCE. This can be
        done in any order. The founders recommend that you drink water between each colour to
        cleanse the palette. Drag and drop the Dragibus pictures into your chosen order, enter a unique name and click
        submit.
      </template>
      <hr class="my-4">
      <div>
        <b-input-group class="mt-3">
          <template #append >
            <b-button @click="submitChoices" variant="info"><strong>Submit</strong></b-button>
          </template>
          <b-form-input></b-form-input>
        </b-input-group>
      <div id="message">

      </div>
      </div>
    </b-jumbotron>
    <div class="divider"></div>
    <div class="sort">
      <b-container fluid >
        <b-row>
          <b-col align="left"><h3 style="color: forestgreen">Most Delicious</h3></b-col>
          <b-col align="right"><h3 style="color: red">Somewhat Lacking</h3></b-col>
        </b-row>
        <b-row id="simpleList">
      <b-col data-id="1" class="list-group-item">
      <h2>Red</h2>
      <p><b-img src="Red.png"></b-img></p>
    </b-col>
      <b-col data-id="2" class="list-group-item">
        <h2>Pink</h2>
        <p><b-img src="Pink.png"></b-img></p>
      </b-col>
          <b-col data-id="3" class="list-group-item">
            <h2> Yellow</h2>
            <p><b-img src="Yellow.png"></b-img></p>
          </b-col>
          <b-col data-id="4" class="list-group-item">
            <h2>Green</h2>
            <p><b-img src="Green.png"></b-img></p>
          </b-col>
          <b-col data-id="5" class="list-group-item">
            <h2>Blue</h2>
            <p><b-img src="Blue.png"></b-img></p>
          </b-col>
          <b-col data-id="6" class="list-group-item">
            <h2>Black</h2>
            <p><b-img src="Black.png"></b-img></p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs/modular/sortable.core.esm.js';

export default {
  name: "Test",
  mounted() {
    let el = document.getElementById("simpleList")
    Sortable.create(el, {
      group: "localStorage-example",
      store: {
        get: function (sortable) {
          var order = localStorage.getItem(sortable.options.group.name);
          return order ? order.split('|' + '') : [];
        },
        set: function (sortable) {
         this.order = sortable.toArray();
          localStorage.setItem(sortable.options.group.name, this.order.join(','));
          console.log(this.order);
        }
      }
    });
  },
  methods: {
    async submitChoices(name) {
      let headers = new Headers();
      headers.append('Authorization', "Choices");
      headers.append('Name', name);
      headers.append('Choices', this.order);
      let host = window.location.protocol + "//" + window.location.hostname+":8080";
      const res = await fetch(host, {});
      console.log(res);
      if (res==="submitted"){
        document.getElementById("message").textContent+="Thank you! Your choices have been submitted."
      }
      if (res==="notunique"){
        document.getElementById("message").textContent+="Oh no! Someone has already submitted a review under that name. Please try a new one."
      }
      else{
        document.getElementById("message").textContent+="Oops! There's been an error. We will fix this soon."
      }
    },
  }
}
</script>

<style scoped>
.divider {
  height: 3rem;
  background-color: white;
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}
.jumbotron{
  margin-bottom: 0!important;
  padding-bottom: 3%;
  border-radius: 0!important;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url("~@/assets/dragibus image.jpg");
}
#message{
  padding-top: 2%;
  font-size: large;
}
</style>