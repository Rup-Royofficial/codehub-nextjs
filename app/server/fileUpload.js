// app/server/fileUpload.js
import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import { createClient } from '@supabase/supabase-js'

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

// Initialize the Supabase client
const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
console.log(supabaseClient)

export default async function handler(req, res) {
  // Run the cors middleware
  await cors(req, res)

  // Handle the file upload request
  if (req.method === 'POST') {
    try {
      // Access the uploaded files from the request
      const files = req.files

      // Get the authenticated user
      const user = await supabaseClient.auth.getUser()
      console.log(user)

      if (!user.data.user) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const userId = user.data.user.id

      // Upload the files to Supabase Storage
      const uploads = await Promise.all(
        files.map(async file => {
          const { data, error } = await supabaseClient.storage
            .from('project-files')
            .upload(`${userId}/${file.name}`, file.data, {
              cacheControl: '3600',
              upsert: false,
            })

          if (error) {
            throw new Error(`Error uploading file: ${file.name}`)
          }

          return data
        })
      )

      res.status(200).json({ uploads })
    } catch (error) {
      console.error('Error uploading files:', error)
      res.status(500).json({ message: 'Error uploading files' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}