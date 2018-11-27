<template>
  <div class="">
    <h3>Все истории ({{ stories.length }})</h3>
    <ul class="list-group">
      <!-- Выводим на странице все истории в виде списка -->
      <li v-for="story in stories" :key="story.id" class="list-group-item">
        <p>
          {{ story.writer }} said "{{ story.plot }}"
          <span class="badge badge-success">{{ story.upvotes }}</span>
        </p>

        <!-- Ссылка на загрузку компонента редактирования в виде кнопки -->
        <router-link
          :to="{ name: 'stories.edit', params: { id: story.id }}"
          tag="button"
          class="btn btn-success"
          exact
        >
          Редактировать
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  data() {
    return {
      stories: store.stories,
    };
  },
  mounted() {
    console.log('Компонент StoriesAll');
  },
};
</script>
