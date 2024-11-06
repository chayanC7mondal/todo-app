// Rest of the code is omitted for brevity

describe('App', () => {
  // Some of the tests are omitted for brevity

  test('should add a task by pressing the enter key', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox', { name: 'Add Task:' });

    await user.type(input, 'New Task{enter}');

    await waitFor(() => {
      expect(screen.queryAllByRole('listitem')).toHaveLength(1);
    });
  });

  // Some of the tests are omitted for brevity
});
