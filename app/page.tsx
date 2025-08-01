import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Award, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Chatbot } from "@/components/chatbot"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-600 hover:bg-blue-700">🚀 Más de 5000 alumnos formados</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Aprende a programar desde cero y encuentra tu primer trabajo en
                <span className="text-yellow-400"> 6 meses</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Domina las tecnologías más demandadas del mercado con nuestros cursos prácticos, profesores expertos y
                metodología probada. Tu futuro profesional comienza aquí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link href="/cursos" className="flex items-center gap-2">
                    Ver Cursos <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  <Link href="/sobre-nosotros" className="flex items-center gap-2">
                    Solicitar Información
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
                  {/* Lumen5 Video */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Lq15DkQIJoI?autoplay=0&mute=1&controls=1"
                    title="Academia de Cursos: Tech Career Launch - Video de Bienvenida"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video de Bienvenida</h3>
                <p className="text-blue-100">Conoce nuestra metodología y filosofía de enseñanza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Alumnos Formados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Tasa de Empleabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Cursos Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9</div>
              <div className="text-gray-600">Valoración Media</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegir nuestra academia?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una experiencia de aprendizaje única que combina teoría y práctica para garantizar tu éxito
              profesional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Profesores Expertos</h3>
                <p className="text-gray-600">Aprende de profesionales con años de experiencia en la industria</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Flexibilidad Total</h3>
                <p className="text-gray-600">Estudia a tu ritmo con clases online y horarios adaptables</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Bolsa de Empleo</h3>
                <p className="text-gray-600">Te conectamos con empresas que buscan el talento que formamos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cursos Destacados</h2>
            <p className="text-xl text-gray-600">Los cursos más populares y con mayor demanda laboral</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo Web Full Stack",
                description: "Aprende React, Node.js, MongoDB y más",
                duration: "6 meses",
                level: "Principiante",
                price: "$12.900/mes",
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
              },
              {
                title: "Data Science con Python",
                description: "Análisis de datos, ML y visualización",
                duration: "4 meses",
                level: "Intermedio",
                price: "$18.500/mes",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
              },
              {
                title: "Diseño UX/UI",
                description: "Crea interfaces increíbles y funcionales",
                duration: "3 meses",
                level: "Principiante",
                price: "$9.900/mes",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
              },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Button>
                      <Link href="/cursos">Ver Detalles</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Link href="/cursos">Ver Todos los Cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lo que dicen nuestros alumnos</h2>
            <p className="text-xl text-gray-600">Historias reales de éxito de nuestra comunidad</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Frontend Developer en Google",
                content:
                  "Gracias a la academia conseguí mi primer trabajo como desarrolladora. Los profesores son increíbles y el contenido muy actualizado.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
              },
              {
                name: "Carlos Ruiz",
                role: "Data Scientist en Microsoft",
                content:
                  "El curso de Data Science cambió mi carrera completamente. Ahora trabajo en una de las mejores empresas tech del mundo.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
              },
              {
                name: "Ana Martín",
                role: "UX Designer en Spotify",
                content:
                  "La metodología práctica y los proyectos reales me prepararon perfectamente para el mundo laboral. 100% recomendado.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Nuestros alumnos trabajan en</h2>
            <p className="text-gray-600">Las mejores empresas confían en nuestros graduados</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para cambiar tu futuro?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya han transformado sus carreras con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/suscripciones">Comenzar Ahora</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/contacto">Hablar con un Asesor</Link>
            </Button>
          </div>
        </div>
      </section>
      <Chatbot section="home" />
    </div>
  )
}
