<template>
  <div class="card">
    <!-- В заголовке показываем количество популярных записей -->
    <h5 class="mt-4">Популярные истории <strong>({{ famous.length }})</strong></h5>
    <div class="card-body">
      <ul class="list-group">
        <!-- Выводим список самых популярных записей -->
        <li v-for="(story, index) in famous" :key="index" class="list-group-item">
          {{ story.writer }} сказал "{{ story.plot }}".
          Голосов: <span class="badge badge-success">{{ story.upvotes }}</span>.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/extensions */

// Подключаем общее хранилище данных.
import { store } from '../store.js';

export default {
  data() {
    return {
      // Передаем в объект data текущего комопонета содержимое
      // свойства stories в объекте store.
      stories: store.stories,
    };
  },
  computed: {
    // Создаем вычисляемое свойство famous() для фильтрации популярных
    // записей по количеству их голосов.
    famous() {
      return this.stories.filter(item => item.upvotes > 50);
    },
  },
  mounted() {
    console.log('Компонент StoriesFamous');
  },
};
</script>
