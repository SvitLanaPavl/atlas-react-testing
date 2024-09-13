import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/api/v1/data', () => {
    return HttpResponse.json ([
      { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
      { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      { id: 3, title: 'Fading Shadows', artist: 'The Emberlight', duration: '3:01' },
    ]);
  }),
];

export const server = setupServer(...handlers)