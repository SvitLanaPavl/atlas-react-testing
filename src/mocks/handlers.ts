import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.example.com/api/v1/data', (_req, res, ctx) => {
    const mockPlaylist = [
      { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
      { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      { id: 3, title: 'Fading Shadows', artist: 'The Emberlight', duration: '3:01' },
    ];

    return res(ctx.status(200), ctx.json(mockPlaylist));
  }),
];
