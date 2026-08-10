import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';
import https from 'https';

const BACKEND_BASE_URL = 'https://api.offish.art/api';


const insecureHttpsAgent = new https.Agent({ rejectUnauthorized: false });

type RouteParams = { params: Promise<{ path: string[] }> };

async function forwardRequest(request: NextRequest, params: { path: string[] }) {
  const targetUrl = `${BACKEND_BASE_URL}/${params.path.join('/')}${request.nextUrl.search}`;

  try {
    const hasBody = request.method !== 'GET' && request.method !== 'HEAD';
    const body = hasBody ? await request.text() : undefined;

    const backendResponse = await axios.request({
      url: targetUrl,
      method: request.method,
      data: body,
      headers: {
        'Content-Type': request.headers.get('content-type') || 'application/json',
        Authorization: request.headers.get('authorization') || '',
      },
      httpsAgent: insecureHttpsAgent,
      timeout: 30000,
      validateStatus: () => true, 
    });

    return NextResponse.json(backendResponse.data, {
      status: backendResponse.status,
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('❌ خطای پروکسی سمت سرور:', axiosError.message);
    return NextResponse.json(
      { message: 'خطا در ارتباط با سرور بک‌اند', detail: axiosError.message },
      { status: 502 }
    );
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  return forwardRequest(request, await params);
}
export async function POST(request: NextRequest, { params }: RouteParams) {
  return forwardRequest(request, await params);
}
export async function PUT(request: NextRequest, { params }: RouteParams) {
  return forwardRequest(request, await params);
}
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  return forwardRequest(request, await params);
}
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  return forwardRequest(request, await params);
}