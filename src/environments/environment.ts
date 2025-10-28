// src/environments/environment.ts
export const environment = {
  production: false,
  spotify: {
    clientId: '1c547db3dada4602856b9cfb32e4651c',
    clientSecret: '96e73045a49a4c8ab2822e9481db0e8a',
    redirectUri: 'http://localhost:4200/callback',
    scopes: [
      'user-read-private',
      'user-read-email',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'streaming',
      'playlist-read-private',
      'playlist-read-collaborative'
    ]
  }
};