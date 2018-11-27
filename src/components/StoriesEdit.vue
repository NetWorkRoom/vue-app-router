<template>
  <div>
    <div class="text-center">
      <h3>Редактирование</h3>
      <!-- Форма редактирования истории -->
      <form>
        <div class="form-group">
          <input class="form-control" v-model="story.plot">
        </div>
        <!-- Кнопки для возвращения назад и сохранения записи -->
        <div class="form-group">
          <button @click="saveChanges(story)" class="btn btn-success mr-2">Сохранить</button>
          <button @click="goBack" class="btn btn-default">Назад</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['id'],
  data() {
    return {
      story: {},
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    saveChanges(story) {
      console.log('Сохранено!');
      this.$router.push('/stories');
    },
    goBack() {
      // Варианты возврата назад на одну позицию
      // this.$router.go(-1);
      // this.$router.back();
      // window.history.back();
      // this.$router.push('/stories');
      this.$router.go(-1);
    },
    isTheOne(story) {
      return story.id === this.id;
    },
  },
  mounted() {
    console.log('Компонент StoriesEdit');
    this.story = store.stories.find(this.isTheOne);
  },
};
</script>
