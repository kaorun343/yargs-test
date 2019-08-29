import yargs from 'yargs/yargs'

describe(yargs, () => {
  it('should work', () => {
    const handlerMock = jest.fn()

    const parser = yargs()
      .scriptName(';yargs-test')
      .command(
        'add <comment>',
        'description',
        yargs =>
          yargs.positional('comment', { type: 'string', demandOption: true }),
        handlerMock,
      )
      .exitProcess(false)
      .help(false)
      .demandCommand()

    parser.parse('add comment')
    expect(handlerMock.mock.calls[0][0].comment).toBe('comment')
  })
})
