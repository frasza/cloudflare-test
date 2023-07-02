export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      title: 'Todo 1',
      complete: false
    },
    {
      id: 2,
      title: 'Todo 2',
      complete: false
    },
    {
      id: 3,
      title: 'Todo 3',
      complete: true
    }
  ]
})
