'use server'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/utils/supabase/server'
import { revalidatePath } from "next/cache";

export async function logout() {
  const supabase = createClient();
  //   await supabase.auth.signOut()
  //   redirect('/')
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    redirect("/error");
  }

  revalidatePath("/login");
  revalidatePath('/authenticatedhomepage')
  revalidatePath("/");
  redirect("/");
}