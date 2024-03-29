module.exports = {
  hello: {
    description: 'Example of an asynchronous task...',
    async run(context) {
      context.log('meow')
      await new Promise(r => setTimeout(r, 500))
      context.log('nyan')
      await new Promise(r => setTimeout(r, 500))
      context.log('whee')
      await new Promise(r => setTimeout(r, 500))
      return 'world'
    }
  },
  testError: {
    description: 'Example of error...',
    async run(context) {
      throw new Error('oops')
    }
  },
  add: {
    description: 'Adds in 2 numbers...',
    options: {
      a: { description: 'First number' },
      b: { description: 'Second number' },
    },
    async run(context) {
      context.log(+context.args.a + +context.args.b)
    }
  }
}