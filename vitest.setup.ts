import '@testing-library/jest-dom/vitest';
import { afterAll, beforeAll, afterEach } from 'vitest';
import { server } from './src/mocks/handlers';


//Establish API mocking
beforeAll(() => server.listen());

//Reset request after each test
afterEach(() => server.resetHandlers());

//Cleanup after tests are finished
afterAll(() => server.close());