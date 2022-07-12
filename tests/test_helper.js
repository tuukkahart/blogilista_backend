const Blog = require('../models/blog')

const initialBlogs = [
    {
        "_id": "62c433ecf410a21d55a29c97",
        "title": "testi",
        "author": "Tuukka",
        "url": "www.blogi.fi",
        "likes": 0,
        "__v": 0
        },
        {
        "_id": "62c48b5e9571954dfc6cf341",
        "title": "devausblogi",
        "author": "Linus",
        "url": "www.linux.fi",
        "likes": 100,
        "__v": 0
        },
        {
        "_id": "62c491365fab39cf7b36e6c9",
        "title": "muotiblogi",
        "author": "Emilia",
        "url": "www.muoti.fi",
        "likes": 20,
        "__v": 0
        }
]

module.exports = {
    initialBlogs
}