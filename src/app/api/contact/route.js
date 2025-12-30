export const runtime = "nodejs";

import nodemailer from "nodemailer"
import { error } from "three"


export async function POST(req){
    
    try {
        const { fullname, email, message } = await req.json()

        if (!fullname || !email || !message ){
            return new Response(JSON.stringify({error: "Data tidak boleh kosong"}), {status: 400})
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        await transporter.sendMail({
            from: `"Portofolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `Contact from: ${fullname}`,
            text: `Nama: ${fullname}\nEmail: ${email}\n\nPesan:\n${message}`,
        })

        return Response.json({ success: true }) 

    } catch (err) {
        // return new Response(JSON.stringify({ error: "Gagal mengirim anjeng" }), { status: 500 })
        console.error("CONTACT API ERROR:", err); // <-- cek terminal
        return Response.json(
        { error: err?.message || "Internal Server Error" },
        { status: 500 }
        );
    }
}