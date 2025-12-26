import { ProfilePage } from '@/components/settings/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/profile')({
  component: ProfilePage,
  head: ()=> ({
    meta: [
      {
        title: 'Profile Settings'
      }
    ]
  })
  
})


