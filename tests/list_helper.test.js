const listHelper = require('../utlis/list_helper')

test('dummy returns one', () =>{
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {
    const blogs = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      {
        _id: "62c433ecf410a21d55a29c97",
        title: "testi",
        author: "Tuukka",
        url: "www.blogi.fi",
        likes: 0,
        __v: 0
        },
        {
        _id: "62c48b5e9571954dfc6cf341",
        title: "devausblogi",
        author: "Linus",
        url: "www.linux.fi",
        likes: 100,
        __v: 0
        },
        {
        _id: "62c491365fab39cf7b36e6c9",
        title: "muotiblogi",
        author: "Emilia",
        url: "www.muoti.fi",
        likes: 20,
        __v: 0
        }
    ]
    const listWithOneBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
    ]
    test('for empty list it is zero', () => {
        const zero = []
        const result = listHelper.totalLikes(zero)
        expect(result).toBe(0)
      })
    
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })

    test('when muliple blogs, return sum of likes', () => {
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(125)
      })
  })