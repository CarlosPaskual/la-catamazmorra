export function formatearFecha(fecha: Date): string {
	return fecha.toLocaleDateString('es-ES', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC', // la fecha del frontmatter se lee como medianoche UTC
	});
}

// «01:12:30» → «1 h 12 min»; «00:45:20» → «45 min». Los segundos se ignoran.
export function formatearDuracion(duracion: string): string {
	const [horas, minutos] = duracion.split(':').map(Number);

	if (horas > 0) {
		return minutos > 0 ? `${horas} h ${minutos} min` : `${horas} h`;
	}
	return `${minutos} min`;
}
