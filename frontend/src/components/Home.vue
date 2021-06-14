<template>
  <div id="app" style="background-color: #ccffdd!important;">
  <div>
    <b-jumbotron class="jumbotron">
      <template #header>The Dragibus Review</template>

      <template #lead>
        A simple test to determine life's eternal question... "Which Dragibus colour tastes the best?"
      </template>
      <hr class="my-4">

      <b-button variant="primary" class="btn mr-3"><router-link style="color: white; padding: 0" to="/test" class="nav-link">Take the test</router-link></b-button>
      <b-button variant="info"><router-link style="color: white; padding: 0" to="/results" class="nav-link">Results</router-link></b-button>

    </b-jumbotron>
  </div>
  <div class="divider"></div>
  <b-container fluid class="bv-example-row">
    <b-row style="padding: 0!important;">
      <b-col col-md-auto style="padding: 0!important; background-color: #ccffdd">
        <b-jumbotron class="jumbotron1"  >
          <h5 align="left">
            <b>What is Dragibus and Where Can I Find Them?</b>
          </h5>
          <hr class="my-4">
          <h6 align="left" >
            Dragibus comes in several forms but the original that should be used to carry out this test can be bought on <a href="https://www.amazon.co.uk/HARIBO-114025-Haribo-Dragibus-250g/dp/B004ZCDVBY/">Amazon</a>.<br>
            They are essentially a French jelly bean which are round in shape and full of flavour. They taste slightly sour and stick to the teeth.
            They come in soft, mixed (size), Tagada (pink and red), Bicool (same colours but with different tastes)
            and halloween versions (orange and black). Dragibus are the second most popular Haribo in France and are even vegan!
          </h6>
        </b-jumbotron>
      </b-col>
      <b-col col-md-auto style="padding: 0 !important; background-color: #ccffdd; align-self: center; height: 100%">
        <b-img src="dragibus_pop.gif" style="width: 100%; min-width: 320px; max-width: 40%; vertical-align: middle;"></b-img>

      </b-col>
    </b-row>
  </b-container>
  <div class="divider"></div>
  <div>
    <b-jumbotron class="jumbotron2">
      <h5 align="left">
        <b>Our Goal of 100 Independent Reviews...</b>
      </h5>

      <div>
        <h6 align="left">Progress</h6>
        <b-progress class="progress" height="2rem" :value="value" :max="max" show-progress animated></b-progress>
      </div>

    </b-jumbotron>
  </div>
  <div class="divider"></div>
  <b-jumbotron class="jumbotron3">
    <h5 align="left">
      <b>The Story of the Dragibus Review</b>
    </h5>
    <hr class="my-4">
    <h6 align="left">
      The review was founded by two enthusiasts of the Dragibus sweet: Pablo Ayuso and Helene Broens. It stands as a
      testament to the household consisting of Helene, Pablo, Kitty and Matt which was dissolved in June 2021 and who where
      the original reviewers. <br>
      <b>Helene</b> has been a life long fan of this stupendous confectionary and provided the resources for the
      initial round of testing. <br>
      <b>Pablo</b> felt the urge to track and quantify his enjoyment of the sweet after spirited debates on the
      relative merit of each colour. He then went on to carry out a small local study where pink was the winner. <br>
      <b>Kitty</b> created this website in an expression of existential dread of dying youth and the end of university.<br>
      There can be no doubt that Dragibus are delicious but the uncertainty of which is truly the best has been killing
      us... so please take the test ;)
    </h6>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.jumbotron{
  margin-bottom: 0!important;
  border-radius: 0!important;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url("~@/assets/dragibus image.jpg");
}
.jumbotron1{
  margin-bottom: 0!important;
  border-radius: 0!important;
  background-color: #ccffdd !important;
  background-image: none;
  opacity: 1;
  left:0;
}
.jumbotron2{
  margin-bottom: 0!important;
  border-radius: 0!important;
  background-color: #ccf5ff !important;
  background-image: none;
  opacity: 1;
}
.jumbotron3{
  margin-bottom: 0!important;
  border-radius: 0!important;
  background-color: #fff0b3 !important;
  background-image: none;
  opacity: 1;
}

.btn{
  margin-right:1rem!important
}

.divider {
  height: 3rem;
  background-color: white;
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}

.progress{
  background-color: rgba(0, 0, 0, .1)!important;
}

</style>