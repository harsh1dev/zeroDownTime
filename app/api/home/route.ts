import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();
export async function POST(req: NextRequest) {
    const {url} = await req.json();
    const data = await client.url.create({
        data: { url },
      });
    return NextResponse.json({ data: data.id });
}
