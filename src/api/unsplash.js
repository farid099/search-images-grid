import axios from 'axios';

export const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {'X-Custom-Header': 'foobar',
    Authorization:'Client-ID FglgV4n_4EJV4z6q2LV7aICjK2DDsI4SjNF8I7g95lw'
}
  });