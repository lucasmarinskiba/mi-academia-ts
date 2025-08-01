// Este es el archivo de la API para la ruta /api/cursos en TypeScript.
// Se ejecutará en el servidor, no en el navegador.

import { NextResponse } from 'next/server';

// Definimos una interfaz para asegurar que la estructura de nuestros cursos es correcta.
interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
}

export async function GET() {
  // Aquí es donde te conectarías a tu base de datos para obtener los cursos.
  // Por ahora, usamos datos de ejemplo que cumplen con la interfaz Course.
  const mockCourses: Course[] = [
    { id: 1, title: 'Desarrollo Web Full Stack', description: 'Aprende a crear aplicaciones web completas con las tecnologías más demandadas del mercado.', instructor: 'Juan Pérez' },
    { id: 2, title: 'Diseño de Experiencia de Usuario', description: 'Domina el arte de crear interfaces intuitivas y atractivas para cualquier tipo de producto digital.', instructor: 'María Gómez' },
    { id: 3, title: 'Estrategias de Marketing Digital', description: 'Aprende a crear campañas publicitarias efectivas y a gestionar redes sociales.', instructor: 'Ana Torres' },
  ];

  // Devolvemos la lista de cursos en formato JSON.
  return NextResponse.json(mockCourses);
}

// Puedes añadir otras funciones para diferentes métodos HTTP, como POST, PUT, DELETE.
// Por ejemplo, para crear un nuevo curso:
/*
export async function POST(request: Request) {
  const newCourseData: Course = await request.json();
  // Aquí guardarías el nuevo curso en la base de datos
  // ...
  return NextResponse.json({ message: "Curso creado exitosamente" });
}
*/
