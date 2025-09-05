'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  User,
  Lock,
  Database,
  Settings as SettingsIcon,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'
import { AdminLayout } from '@/components/admin/admin-layout'

export default function AdminSettingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    totalGalleryItems: 0,
    totalUsers: 0
  })

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    
    setProfileData(prev => ({
      ...prev,
      name: session.user?.name || '',
      email: session.user?.email || ''
    }))
    
    fetchStats()
  }, [session, status, router])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (profileData.newPassword && profileData.newPassword !== profileData.confirmPassword) {
      setError('New passwords do not match')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/admin/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: profileData.name,
          currentPassword: profileData.currentPassword,
          newPassword: profileData.newPassword
        }),
      })

      if (response.ok) {
        setSuccess('Profile updated successfully!')
        setProfileData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }))
      } else {
        const data = await response.json()
        setError(data.error || 'An error occurred')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      </AdminLayout>
    )
  }

  if (!session) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account and system preferences</p>
        </div>

        {/* Alerts */}
        {error && (
          <Alert className="border-red-500/50 bg-red-500/10">
            <AlertDescription className="text-red-400">{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert className="border-green-500/50 bg-green-500/10">
            <AlertDescription className="text-green-400">{success}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="profile" className="data-[state=active]:bg-red-600">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-red-600">
              <Database className="h-4 w-4 mr-2" />
              System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Settings */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Update your account details and password
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        disabled
                      />
                      <p className="text-xs text-gray-400">Email cannot be changed</p>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="text-white">Current Password</Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={profileData.currentPassword}
                            onChange={(e) => setProfileData(prev => ({ ...prev, currentPassword: e.target.value }))}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-white"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="newPassword" className="text-white">New Password</Label>
                          <div className="relative">
                            <Input
                              id="newPassword"
                              type={showNewPassword ? 'text' : 'password'}
                              value={profileData.newPassword}
                              onChange={(e) => setProfileData(prev => ({ ...prev, newPassword: e.target.value }))}
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                              placeholder="Enter new password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowNewPassword(!showNewPassword)}
                              className="absolute right-3 top-3 text-gray-400 hover:text-white"
                            >
                              {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={profileData.confirmPassword}
                            onChange={(e) => setProfileData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Confirm new password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            {/* System Statistics */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  System Statistics
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Overview of your content and system status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.totalPosts}</div>
                    <div className="text-sm text-gray-400">Total Posts</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stats.publishedPosts} published
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.totalGalleryItems}</div>
                    <div className="text-sm text-gray-400">Gallery Items</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.totalUsers}</div>
                    <div className="text-sm text-gray-400">Admin Users</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">Online</div>
                    <div className="text-sm text-gray-400">System Status</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Information */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">System Information</CardTitle>
                <CardDescription className="text-gray-300">
                  Technical details about your installation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Platform</span>
                    <Badge variant="outline" className="border-white/20 text-white">Next.js 15</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Database</span>
                    <Badge variant="outline" className="border-white/20 text-white">PostgreSQL</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Authentication</span>
                    <Badge variant="outline" className="border-white/20 text-white">NextAuth.js</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Image Storage</span>
                    <Badge variant="outline" className="border-white/20 text-white">Cloudinary</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}