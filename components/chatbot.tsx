"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatbotProps {
  section: "home" | "courses" | "blog" | "contact" | "subscriptions" | "about"
}

export function Chatbot({ section }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const sectionConfig = {
    home: {
      title: "Asistente de Bienvenida",
      welcomeMessage:
        "¡Hola! 👋 Bienvenido a Academia de Cursos. Soy tu asistente virtual y estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?",
      responses: {
        cursos:
          "Tenemos más de 50 cursos en tecnología. Te recomiendo visitar nuestra sección de cursos donde podrás filtrar por nivel y categoría. ¿Te interesa alguna área específica como desarrollo web, data science o diseño?",
        precios:
          "Nuestros precios están adaptados a la economía argentina. Los cursos individuales van desde $9.900/mes y tenemos planes familiares e institucionales. ¿Te gustaría conocer nuestros planes de suscripción?",
        certificados:
          "Sí, todos nuestros cursos incluyen certificados oficiales reconocidos en la industria. Además, tenemos una tasa de empleabilidad del 85% entre nuestros graduados.",
        profesores:
          "Nuestros profesores son expertos con experiencia en empresas como Google, Microsoft, Meta y Amazon. Cada curso está diseñado por profesionales activos en la industria.",
        default:
          "Estoy aquí para ayudarte con cualquier pregunta sobre nuestra academia. Puedes preguntarme sobre cursos, precios, certificados, profesores o cualquier otra consulta.",
      },
    },
    courses: {
      title: "Asesor de Cursos",
      welcomeMessage:
        "¡Hola! Soy tu asesor de cursos personalizado. Cuéntame sobre tus intereses y experiencia para recomendarte el curso perfecto. ¿Eres principiante o ya tienes experiencia en tecnología?",
      responses: {
        principiante:
          "Perfecto para principiantes, te recomiendo:\n• Desarrollo Web Full Stack ($12.900/mes) - Profesor: Carlos Mendoza (ex-Google)\n• Diseño UX/UI ($9.900/mes) - Profesora: María López (ex-Meta)\n¿Cuál te llama más la atención?",
        intermedio:
          "Para nivel intermedio, estas opciones son ideales:\n• Data Science con Python ($18.500/mes) - Profesora: Ana García (ex-Microsoft)\n• Desarrollo Mobile ($16.900/mes) - Profesor: David Ruiz (ex-Amazon)\n¿Te interesa más el análisis de datos o desarrollo móvil?",
        avanzado:
          "Para profesionales avanzados:\n• DevOps y Cloud ($24.900/mes) - Profesor: Luis Martín (ex-AWS)\n• Ciberseguridad ($27.900/mes) - Profesora: Elena Vega (ex-IBM)\nAmbos incluyen certificaciones oficiales.",
        web: "Carlos Mendoza, nuestro instructor de Desarrollo Web, tiene 8+ años en Google y ha formado a más de 5000 estudiantes. Su curso incluye React, Node.js, MongoDB y proyectos reales.",
        data: "Ana García, experta en Data Science, trabajó 6 años en Microsoft desarrollando algoritmos de ML. Su curso cubre Python, Machine Learning y visualización de datos.",
        default:
          "Cuéntame más sobre tus intereses: ¿prefieres programación, diseño, análisis de datos o seguridad? También puedo darte información detallada sobre cualquier profesor.",
      },
    },
    blog: {
      title: "Asistente de Contenido",
      welcomeMessage:
        "¡Hola! Soy tu guía de contenido educativo. Puedo ayudarte a encontrar artículos relevantes, resumir información o explicarte conceptos de nuestro blog. ¿Qué tema te interesa?",
      responses: {
        habilidades:
          "Según nuestro artículo más popular, las 7 habilidades más demandadas en 2025 son: IA/ML Generativo, Quantum Computing, Desarrollo Full Stack con IA, Ciberseguridad Cuántica, Cloud Multi-híbrido, Análisis de Datos con IA y Green Tech. ¿Te gustaría profundizar en alguna?",
        portafolio:
          "Para crear un portafolio profesional exitoso: incluye 3-5 proyectos diversos, documenta tu proceso de trabajo, usa tecnologías actuales y asegúrate de que sea responsive. ¿Necesitas ayuda con algún aspecto específico?",
        react:
          "React sigue siendo el framework más demandado en 2025. Comparado con Vue y Angular, React tiene la mayor comunidad y oportunidades laborales. ¿Te interesa aprender React?",
        carrera:
          "Para conseguir tu primer trabajo remoto en tech: optimiza tu LinkedIn, contribuye a proyectos open source, practica coding interviews y construye un portafolio sólido. ¿En qué área te gustaría especializarte?",
        default:
          "Puedo ayudarte con información sobre tendencias tecnológicas, consejos de carrera, comparativas de tecnologías o cualquier tema de nuestros artículos. ¿Qué te gustaría saber?",
      },
    },
    contact: {
      title: "Información de Contacto",
      welcomeMessage:
        "¡Hola! Aquí tienes toda la información de contacto de nuestro equipo. Estoy disponible 24/7 para atención al cliente. ¿Con quién te gustaría comunicarte o qué información necesitas?",
      responses: {
        email:
          "📧 Emails de contacto:\n• General: info@academiacursos.com\n• Soporte: soporte@academiacursos.com\n• Ventas: ventas@academiacursos.com",
        telefono:
          "📞 Teléfonos:\n• Argentina: +54 11 4567-8900\n• WhatsApp: +54 9 11 4567-8900\n• Horario: Lunes a Viernes 9:00-18:00 ART",
        linkedin:
          "🔗 LinkedIn del equipo:\n• Carlos Mendoza (CEO): linkedin.com/in/carlos-mendoza-dev\n• Ana García (CTO): linkedin.com/in/ana-garcia-data\n• María López (Directora): linkedin.com/in/maria-lopez-ux\n• Lucas Marín (Diseñador Web): linkedin.com/in/lucas-daniel-marin/",
        direccion: "📍 Oficina principal:\nAv. Corrientes 1234, Piso 8\nBuenos Aires, Argentina (C1043AAZ)",
        redes:
          "🌐 Nuestras redes sociales:\n• Instagram: @academiadecursos\n• LinkedIn: /company/academia-cursos\n• X (Twitter): @academiacursos\n• TikTok: @academiadecursos\n¡Síguenos para contenido educativo diario!",
        atencion:
          "🔧 Atención al Cliente 24/7:\nEstoy aquí para ayudarte en cualquier momento. Puedes contactarnos por:\n• Chat en vivo (este chat)\n• WhatsApp: +54 9 11 4567-8900\n• Email: soporte@academiacursos.com\n• Teléfono: +54 11 4567-8900",
        default:
          "Puedes contactarnos por email, teléfono, WhatsApp o nuestras redes sociales. También ofrezco atención al cliente 24/7 aquí mismo. ¿Prefieres algún medio en particular o necesitas ayuda inmediata?",
      },
    },
    subscriptions: {
      title: "Asesor de Suscripciones",
      welcomeMessage:
        "¡Hola! Soy tu asesor financiero de suscripciones. Te ayudo a elegir el plan perfecto según tu presupuesto y necesidades. ¿Cuál es tu situación actual?",
      responses: {
        estudiante:
          "Para estudiantes recomiendo:\n• Plan Individual ($15.900/mes) - 1 curso\n• Con descuento estudiantil: $12.720/mes\n• Plan anual: $127.200/año (33% descuento)\n¿Tienes credencial estudiantil?",
        familia:
          "El Pack Familiar ($39.900/mes) es perfecto:\n• 4 cuentas incluidas\n• Acceso a todos los cursos\n• Ahorro vs 4 planes individuales: $23.700/mes\n• Plan anual: $319.200 (gran ahorro)",
        empresa:
          "Plan Institucional ($89.900/mes):\n• Hasta 50 usuarios\n• Dashboard administrativo\n• Cursos personalizados\n• ROI comprobado del 300% en 6 meses",
        economico:
          "Opciones más económicas:\n• Plan Individual: $15.900/mes\n• Pago anual: $127.200 (ahorro de $63.600)\n• Financiación en 3 cuotas sin interés\n• Becas disponibles (hasta 50% descuento)",
        premium:
          "Plan Premium ($24.900/mes) incluye:\n• TODOS los cursos (valor $500.000+)\n• Mentorías 1 a 1\n• Bolsa de empleo exclusiva\n• Certificaciones oficiales\n¿Te interesa conocer el ROI?",
        default:
          "Puedo recomendarte el plan ideal según tu presupuesto. ¿Eres estudiante, profesional, familia o empresa? También tengo opciones de financiación y becas disponibles.",
      },
    },
    about: {
      title: "Información Institucional",
      welcomeMessage:
        "¡Hola! Te cuento sobre nuestra academia. Somos una institución fundada por profesionales de Silicon Valley con más de 5000 graduados. ¿Qué te gustaría saber sobre nosotros?",
      responses: {
        historia:
          "Fundada en 2020 por Carlos Mendoza (ex-Google) y Ana García (ex-Microsoft). Nuestro objetivo es democratizar la educación tecnológica con metodología práctica y profesores de élite.",
        equipo:
          "Nuestro equipo:\n• Carlos Mendoza - CEO (ex-Google, 10+ años)\n• Ana García - CTO (ex-Microsoft, 8+ años)\n• María López - Directora Académica (ex-Meta)\n• David Ruiz - Director Tecnológico (ex-Amazon)",
        metodologia:
          "Nuestra metodología única combina:\n• Aprendizaje práctico con proyectos reales\n• Mentoría personalizada 1 a 1\n• Certificaciones reconocidas por la industria\n• Bolsa de empleo con 85% de empleabilidad",
        contacto:
          "📞 +54 11 4567-8900\n📧 info@academiacursos.com\n📍 Av. Corrientes 1234, Buenos Aires\n🔗 LinkedIn: /company/academia-cursos",
        default:
          "Puedes preguntarme sobre nuestra historia, equipo, metodología, valores o información de contacto. ¿Qué aspecto te interesa más?",
      },
    },
  }

  const config = sectionConfig[section]

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          text: config.welcomeMessage,
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, config.welcomeMessage, messages.length])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const responses = config.responses

    for (const [key, response] of Object.entries(responses)) {
      if (key !== "default" && input.includes(key)) {
        return response
      }
    }

    return responses.default
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-96 z-50 shadow-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="w-5 h-5 text-blue-600" />
              {config.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === "bot" && <Bot className="w-4 h-4 mt-0.5 text-blue-600" />}
                        {message.sender === "user" && <User className="w-4 h-4 mt-0.5" />}
                        <div className="text-sm whitespace-pre-line">{message.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-blue-600" />
                        <div className="text-sm text-gray-500">Escribiendo...</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
