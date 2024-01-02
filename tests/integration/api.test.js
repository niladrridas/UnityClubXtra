const request = require('supertest');
const app = require('../../backend/app');

describe('API Integration Tests', () => {
    // Test the endpoint for getting all posts
    test('GET /api/posts should return an array of posts', async () => {
        const response = await request(app).get('/api/posts');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    // Test the endpoint for getting a single post by ID
    test('GET /api/posts/:id should return a single post by ID', async () => {
        const post = { title: 'Sample Post', content: 'Post content' };
        const createdPost = await request(app).post('/api/posts').send(post);

        const response = await request(app).get(`/api/posts/${createdPost.body._id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(post);
    });
    // Add more tests for other API endpoints as needed
});
