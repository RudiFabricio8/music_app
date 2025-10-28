// src/environments/environment.example.ts

export const environment = {
  production: false,
  spotify: {
    clientId: 'OBTENER_EN_https://developer.spotify.com/dashboard',
    clientSecret: 'OBTENER_EN_https://developer.spotify.com/dashboard',
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