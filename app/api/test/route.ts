import { NextResponse } from 'next/server';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: Request) {
  const randomDelay = Math.floor(Math.random() * 5000);
  console.log('randomDelay', randomDelay);

  throw new Error();
}
