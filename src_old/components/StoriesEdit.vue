<template>
  <div>
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <h3>Редактирование</h3>
        <form>
          <div class="form-group col-md-offset-2 col-md-8">
            <input class="form-control" v-model="story.plot">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/extensions */

// Подключаем общее хранилище данных.
import { store } from '../store.js';

export default {
  props: ['id'],
  data() {
    return {
      story: {},
    };
  },
  methods: {
    isTheOne(story) {
      return story.id === this.id;
    },
  },
  mounted() {
    this.story = store.stories.find(this.isTheOne);
    console.log(this.story);
  },
};
</script>
