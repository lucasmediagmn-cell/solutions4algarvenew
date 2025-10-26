
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são campos obrigatórios' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name: name?.trim?.() || '',
        email: email?.toLowerCase?.()?.trim?.() || '',
        phone: phone?.trim?.() || null,
        service: service || null,
        message: message?.trim?.() || '',
        status: 'new',
        formType: 'contact'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!',
        id: submission?.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating contact submission:', error)
    
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Endpoint disponível apenas para POST requests' },
    { status: 405 }
  )
}
