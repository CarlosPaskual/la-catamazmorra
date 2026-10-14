import IconoSpotify from './icons/spotify.svg';
import IconoApplePodcasts from './icons/applepodcasts.svg';
import IconoIvoox from './icons/podcast.svg'; // genérico: iVoox no está en Simple Icons
import IconoYoutube from './icons/youtube.svg';

export const podcast = {
	nombre: 'La Catamazmorra',
	lema: 'Cine, series y videojuegos desde el sótano',
	x: 'https://x.com/catamazmorra',
};

// TODO: sustituir por las URL reales del podcast en cada plataforma
export const plataformas = [
	{ nombre: 'Spotify', url: 'https://open.spotify.com/', icono: IconoSpotify },
	{ nombre: 'Apple Podcasts', url: 'https://podcasts.apple.com/', icono: IconoApplePodcasts },
	{ nombre: 'iVoox', url: 'https://www.ivoox.com/', icono: IconoIvoox },
	{ nombre: 'YouTube', url: 'https://www.youtube.com/', icono: IconoYoutube },
];
