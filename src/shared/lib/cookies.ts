'use server';

import { cookies } from 'next/headers';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 2, // 2 days
};

export const setAuthCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set('accessToken', token, COOKIE_OPTIONS);
};

export const getAuthCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('accessToken')?.value;
};

export const removeAuthCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
};

export const setUserCookie = async (user: any) => {
  const cookieStore = await cookies();
  cookieStore.set('user', JSON.stringify(user), {
    ...COOKIE_OPTIONS,
    maxAge: 60 * 60 * 24 * 7,
  });
};

export const getUserCookie = async () => {
  const cookieStore = await cookies();
  const user = cookieStore.get('user')?.value;
  return user ? JSON.parse(user) : null;
};