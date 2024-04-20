import { redirect } from 'next/navigation'

import { createClient } from 'app/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

//   console.log(data.user.email)
  return <p>Hello {data.user.email}</p>
}