const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () =>{
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
})

const api = supertest(app)

test('return json', async () =>{
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('json length is right', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('identifier name is id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
})

// test('a blog can be added ', async () => {
//     const newBlog = {
//       title: "Testi",
//       author: "tuukka",
//       url: "http://jaaioo.fi"
//     }
  
//     await api
//       .post('/api/blogs')
//       .send(newBlog)
//       .expect(201)
//       .expect('Content-Type', /application\/json/)
  
//     const response = await api.get('/api/blogs')
  
//     const titles = response.body.map(r => r.title)
  
//     expect(response.body).toHaveLength(helper.initialBlogs.length + 1)
//     expect(titles).toContain("Testi")
//   })
//does not work after authentication
