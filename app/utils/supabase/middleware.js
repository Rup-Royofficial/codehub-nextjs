import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function updateSession(request) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name, options) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )


  const { data,error } = await supabase.auth.getUser()

  // If the user is authenticated and trying to access the unauthenticated homepage
  if(data.user && request.nextUrl.pathname === '/' ){
    // Redirect the user to the authenticated homepage
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/authenticated/homepage'
    return NextResponse.redirect(redirectUrl)
  }

  if (data.user && request.nextUrl.pathname.startsWith('/login')) {
    // Redirect the user to the authenticated homepage
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/authenticated/homepage'
    return NextResponse.redirect(redirectUrl)
  }


  return response
}