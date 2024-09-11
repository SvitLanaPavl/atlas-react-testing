import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

export const server = setupServer(...handlers);

//Establish API mocking
beforeAll(() => server.listen());

//Reset request after each test
afterEach(() => server.restoreHandlers());

//Cleanup after tests are finished
afterAll(() => server.close());