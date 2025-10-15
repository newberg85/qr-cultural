import { NextResponse } from "next/server";
import cloudinary from "@/app/services/cloudinary";

export async function POST(req){
    const data = await req.formData();
    const file = data.get("file");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {folder: "qr-cultural"},
            (error, result) => {
                if (error) {
                    resolve(NextResponse.json({error: "Erro ao enviar imagem"}, {status: 500}));
                } else {
                    resolve(NextResponse.json({url: result.secure_url}));
                }
            }   
        );
        uploadStream.end(buffer);
    });
}