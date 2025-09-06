# Tinspol Motors - Replit Setup

## Project Overview
A complete Next.js automotive business website with admin panel, successfully imported and configured for Replit environment.

**Status:** ✅ Running successfully on port 5000

## Key Features
- **Frontend**: Next.js 15 with React 19 and TypeScript
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js with admin panel
- **Image Storage**: Cloudinary integration (demo config)
- **UI**: Tailwind CSS with Radix UI components

## Current Configuration
- **Port**: 5000 (configured for Replit)
- **Host**: 0.0.0.0 (allows proxy access)
- **Database**: SQLite at `./prisma/dev.db`
- **Admin Login**: admin@tinspol.com / admin123

## Environment Setup
All required environment variables are configured with placeholder values:
- Database URL points to SQLite file
- NextAuth configured with development secret
- Cloudinary set to demo values (can be updated with real credentials)
- Admin credentials set for immediate access

## Database
- ✅ Schema pushed successfully
- ✅ Sample data initialized
- ✅ Admin user created
- ✅ Sample blog post and gallery item added

## Recent Changes (2025-09-06)
- Configured Next.js for Replit environment (port 5000, host 0.0.0.0)
- Set up development workflow with all required environment variables
- Initialized database with sample content
- Configured deployment for autoscale target
- Updated suspension service page with comprehensive components list:
  - Added detailed suspension components section (12 components)
  - Improved service page layout and information structure
- Added authentic Tinspol Motors business information from documents:
  - Integrated detailed A, B, C service packages from official service menu
  - Updated company descriptions to reflect Zimbabwe market focus
  - Verified all contact information matches official documentation
  - Enhanced motor mechanics page with professional maintenance schedules

## Admin Access
Visit `/admin/login` to access the admin panel with the configured credentials.

## Next Steps
- Update Cloudinary credentials for real image uploads
- Customize content and branding as needed
- Add additional blog posts and gallery items through admin panel