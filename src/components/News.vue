<template>
  <v-card max-width=512 max-height=256 min-width=512 min-height=256 >
    <v-carousel cycle show-arrows-on-hover height=256>
      <v-carousel-item v-for="(News, i) in news" :key="i">
        <v-sheet class="newsInfo">
          <h3>{{News.Title}}</h3>
          <div>{{News.SummaryHtml}}</div>
        </v-sheet>
        <v-img  :src="News.HeaderImage" aspect-ratio="1.7778"/>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  name:"news",
    data: () => ({
    }),
    props: ['news']
}
</script>

<style scope>
  .newsInfo {
    position:absolute; 
    z-index: 1; 
    width: 100%; 
    color: white !important; 
    background: rgba(0,0,0,0.3) !important; 
    text-align:right;
  }
</style>