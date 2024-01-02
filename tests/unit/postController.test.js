const postController = require('../../backend/controllers/postController');
const Post = require('../../backend/models/Post');

describe('Post Controller Unit Tests', () => {
    // Test for getAllPosts controller method
    test('getAllPosts should return an array of posts', async () => {
        const mockPosts = [{ title: 'Post 1' }, { title: 'Post 2' }];
        jest.spyOn(Post, 'find').mockResolvedValueOnce(mockPosts);

        const result = await postController.getAllPosts();

        expect(result).toEqual(mockPosts);
    });

    // Test for getPostById controller method
    test('getPostById should return a single post by ID', async () => {
        const mockPost = { title: 'Sample Post', content: 'Post content' };
        jest.spyOn(Post, 'findById').mockResolvedValueOnce(mockPost);

        const result = await postController.getPostById('123');

        expect(result).toEqual(mockPost);
    });
    // Add more tests for other controller methods as needed
});
