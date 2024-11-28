
import { db } from "@/lib/db"
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contacts"
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const values = await req.formData()
    
    // Validación de campos
    const validatedFields = contactFormSchema.parse({
      name: values.get('name'),
      email: values.get('email'),
      phone: values.get('phone'),
      subject: values.get('subject'),
      message: values.get('message') ? values.get('message') : "",
    })

    // Creación del contacto
    const result = await db.contact.create({
      data: validatedFields,
    })

    // Respuesta exitosa
    return NextResponse.json(result, { status: 201 });

  } catch (error) {
    // Manejo de errores de validación de Zod
    if (error instanceof ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 });
    }

    // Manejo de otros errores (por ejemplo, errores de base de datos)
    console.error(error);
    return NextResponse.json({ 
      success: false, 
      error: "Error al enviar el formulario." 
    }, { status: 500 });
  }
}