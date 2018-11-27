<template>
  <div>
    <!-- В заголовке показываем количество популярных записей -->
    <h5 class="mt-4">Популярные истории <strong>({{ famous.length }})</strong></h5>

    <ul class="list-group">
      <!-- Выводим список самых популярных записей -->
      <li v-for="(story, index) in famous" :key="index" class="list-group-item">
        {{ story.writer }} сказал "{{ story.plot }}".
        Голосов за историю: {{ story.upvotes }}.
      </li>
    </ul>
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
  created() {
    console.log('популярные');
  },
  computed: {
    // Создаем вычисляемое свойство famous() для фильтрации популярных
    // записей по количеству их голосов.
    famous() {
      return this.stories.filter(item => item.upvotes > 50);
    },
  },
};
</script>
