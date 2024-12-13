<template>
  <img alt="Vue logo" src="../assets/Github_DP.png" />
  <div>
    <h1>Hi! I'm Meher Yar, a 'some guy'.</h1>

    <h2>About me</h2>
    <p>Drinks coffee and thinks about retirement.</p>

    <h2>What I'm working on</h2>
    <p>
      A novel (manually, despite the AI revolution), learning and working with
      code (despite the AI revolution), and trying to make money (once more,
      despite the AI revolution).
    </p>

    <h2>What is the answer?</h2>
    <p>It is, and always has been, 42.</p>
  </div>

  <div>
    <h2>Stats</h2>

    <div v-for="stat in statsObjs" :key="stat.id">
      <CardComponent :stat="stat">
        <template v-slot:statImg>
          <img id="stat-property" src="../assets/wizard.jpg" />
        </template>
      </CardComponent>
    </div>
  </div>

  <div v-if="quotesAvailable">
    <h2>Some Good Quotes I Like</h2>
  </div>
</template>

<script>
import { ref } from "vue";
import CardComponent from "./CardComponent.vue";

export default {
  name: "LandingComponent",
  components: { CardComponent },

  setup() {
    const quotesAvailable = ref(false);
    const statsObjs = {
      rank: { id: "1", property: "rank", value: "Wizard" },
      strength: { id: "2", property: "strength", value: "Gym Freak" },
      intelligence: { id: "3", property: "intelligence", value: "Very High" },
    };

    return { quotesAvailable, statsObjs };
  },
};
</script>

<style scoped>
img {
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
}

#stat-property {
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
}
</style>
