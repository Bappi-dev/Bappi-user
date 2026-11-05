import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const formattedErrors = result.error.format();
      return NextResponse.json(
        { success: false, errors: formattedErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Simulated asynchronous processing / notification dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name}! Your message has been received. I'll get back to you within 24 hours.`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}

