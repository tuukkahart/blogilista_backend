const blogsRouter = require('express').Router()
const jwt = require('jsonwebtoken')

const Blog = require('../models/blog')
const User = require('../models/user')


const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', {username: 1 , name: 1 })
  
    response.json(blogs)
})
  
blogsRouter.post('/', async (request, response) => {
    const body = request.body

    console.log('get token from request', getTokenFrom(request))
    const token = getTokenFrom(request)

    const decodedToken = jwt.verify(token, process.env.SECRET)
    console.log('decoded token: ',decodedToken)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    if (user === null){
        console.log('not be defined')
        return response.status(401).json({error: 'no user found with this token'})
    }

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes:0,
      user: user._id

    })
  
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.status(201).json(savedBlog)
    
})

blogsRouter.put('/:id', async (request, response) => {
    const body = request.body

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(body.user.id)

    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user._id
    }

    const changedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
    response.json(changedBlog)

})

blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

module.exports = blogsRouter