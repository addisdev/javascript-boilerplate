import { HttpClient } from './HttpClient.js'

const client = new HttpClient('https://jsonplaceholder.typicode.com/posts');

(async () => {

    try {
        const posts = await client.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Fetched Posts:\n', JSON.stringify(posts, null, 2));

    } catch (error) {
        console.error('Error:', error.message);
    }
})()