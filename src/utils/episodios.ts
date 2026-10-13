import { getCollection } from 'astro:content';

// getCollection no garantiza orden: del más reciente (mayor número) al más antiguo
export async function obtenerEpisodios() {
	const episodios = await getCollection('episodios');
	return episodios.sort((a, b) => b.data.numero - a.data.numero);
}
