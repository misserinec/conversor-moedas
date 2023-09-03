import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });
});

it('deve formatar a data 2023-09-02 para 02/09/2023', () => {
  const pipe = new DataBrPipe();
  expect(pipe.transform('2023-09-02')).toEqual('02/09/2023');
});
