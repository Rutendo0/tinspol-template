# Tinspol Motors - Admin CMS System

A complete automotive business website with admin panel for managing blog posts and gallery items.

## Features

### Public Website
- **Modern Design**: Red and black theme with responsive layout
- **Services Pages**: Motor mechanics, panel beating, car wash, etc.
- **Blog System**: Dynamic blog with categories and featured posts
- **Gallery**: Before/after showcase for repairs, resprays, suspension, etc.
- **Contact Forms**: Quote requests and contact information
- **Mobile Optimized**: Fully responsive design

### Admin Panel
- **Authentication**: Secure login system with NextAuth.js
- **Blog Management**: Create, edit, delete, and publish blog posts
- **Gallery Management**: Upload before/after images with categories
- **Image Upload**: Cloudinary integration for image storage
- **Dashboard**: Overview of content and statistics
- **User Management**: Admin profile and settings

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with credentials provider
- **Image Storage**: Cloudinary
- **Deployment**: Vercel ready

## Setup Instructions

### 1. Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Cloudinary account (for image uploads)

### 2. Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd tinspol-template

# Install dependencies
pnpm install

# Generate Prisma client
pnpm db:generate
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/tinspol_motors"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Admin
ADMIN_EMAIL="admin@tinspol.com"
ADMIN_PASSWORD="your-admin-password"
```

### 4. Database Setup

```bash
# Push database schema
pnpm db:push

# Initialize with sample data and admin user
pnpm db:init
```

### 5. Cloudinary Setup

1. Create a Cloudinary account at https://cloudinary.com
2. Get your cloud name, API key, and API secret from the dashboard
3. Create upload presets:
   - `tinspol_blog` - for blog post images
   - `tinspol_gallery` - for gallery images
4. Set both presets to "Unsigned" mode

### 6. Run the Application

```bash
# Development mode
pnpm dev

# Production build
pnpm build
pnpm start
```

## Usage

### Admin Access
1. Navigate to `/admin/login`
2. Use the credentials from your `.env` file
3. Access the admin dashboard at `/admin/dashboard`

### Admin Features

#### Blog Management
- **Create Posts**: Rich text editor with image uploads
- **Categories**: Maintenance Tips, Safety, Engine Care, etc.
- **Publishing**: Draft/publish system with featured posts
- **SEO**: Custom slugs and meta descriptions

#### Gallery Management
- **Before/After Images**: Upload comparison images
- **Categories**: Repairs, Resprays, Suspension, Wheel Alignment, Detailing
- **Featured Items**: Highlight best work
- **Descriptions**: Add context to transformations

### Public Pages
- `/` - Homepage with services overview
- `/services` - Service categories
- `/services/motor-mechanics` - Specific service pages
- `/blog` - Blog listing with categories
- `/blog/[slug]` - Individual blog posts
- `/gallery` - Before/after showcase
- `/about` - Company information
- `/contact` - Contact form and details
- `/quote` - Service quote request

## Database Schema

### Users
- Admin authentication and profile management

### Blog Posts
- Title, slug, content, excerpt
- Categories, featured status, publish status
- Author relationship, timestamps

### Gallery Items
- Before/after images, title, description
- Categories (repairs, resprays, etc.)
- Featured status, author relationship

## Customization

### Branding
- Update logo URLs in components
- Modify color scheme in Tailwind config
- Update company information in pages

### Services
- Add new service pages in `/app/services/`
- Update service listings in components
- Modify service categories

### Content
- Blog categories in admin components
- Gallery categories in Prisma schema
- Contact information throughout site

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Ensure Node.js 18+ support
- Set up PostgreSQL database
- Configure environment variables
- Run build process

## Support

For issues or questions:
1. Check the GitHub issues
2. Review the documentation
3. Contact the development team

## License

This project is proprietary software for Tinspol Motors.