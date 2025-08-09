# Marketing AI - Next.js Project

Một ứng dụng marketing AI được xây dựng với Next.js, TypeScript, ShadCN UI và Magic UI.

## 🚀 Tính năng

### Trang chính
- **Landing Page** (`/`) - Trang chủ với thiết kế black & white theme
- **Features** (`/features`) - Mô tả chi tiết các AI tools
- **Pricing** (`/pricing`) - Bảng giá SaaS với các gói Free, Pro, Enterprise
- **About** (`/about`) - Thông tin về đội ngũ và sứ mệnh
- **Contact** (`/contact`) - Trang liên hệ với form
- **Terms** (`/terms`) - Điều khoản sử dụng
- **Privacy** (`/privacy`) - Chính sách bảo mật
- **Dashboard** (`/dashboard`) - Trang quản lý sau khi đăng nhập

### Hệ thống Authentication
- **Login** (`/(auth)/login`) - Trang đăng nhập
- **Register** (`/(auth)/register`) - Trang đăng ký
- **Forgot Password** (`/(auth)/forgot-password`) - Trang quên mật khẩu

## 🎨 Thiết kế

- **Theme**: Black & White với accent colors
- **UI Framework**: ShadCN UI + Magic UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Magic UI Globe component

## 📦 Components đã cài đặt

### ShadCN UI Components
- ✅ Button
- ✅ Card
- ✅ Input
- ✅ Dialog
- ✅ Dropdown Menu
- ✅ Textarea
- ✅ Label
- ✅ Select
- ✅ Sonner (Toast notifications)

### Magic UI Components
- ✅ Globe (3D interactive globe)

## 🔧 Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Start production server
npm start
```

### Biến môi trường

Tạo file `.env.local` với các biến sau để kết nối Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Tham khảo dự án Supabase để lấy URL và anon key.

## 📁 Cấu trúc thư mục

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── about/
│   ├── contact/
│   ├── dashboard/
│   ├── features/
│   ├── pricing/
│   ├── privacy/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # ShadCN UI components
│   └── magicui/     # Magic UI components
└── lib/
    └── utils.ts     # Utility functions
```

## 🎯 Tính năng chính

### 1. Landing Page
- Hero section với AI-powered marketing
- Features showcase
- Stats section
- CTA sections
- Footer với navigation

### 2. Authentication System
- Form validation
- Social login (Google)
- Responsive design
- Error handling

### 3. Dashboard
- Analytics overview
- Campaign management
- Quick actions
- AI insights

### 4. Content Pages
- Detailed feature descriptions
- Pricing plans comparison
- Company information
- Contact form

## 🔗 Navigation

Tất cả các đường dẫn đã được cập nhật và liên kết chính xác:
- Navigation header → Features, Pricing, About
- Footer links → About, Contact, Terms, Privacy
- Auth pages → Dashboard sau khi đăng nhập
- CTA buttons → Register/Login pages

## 🎨 Color Scheme

- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Gray tones (#gray-50 to #gray-800)
- **Success**: Green (#green-600)
- **Info**: Blue (#blue-600)
- **Warning**: Orange (#orange-600)

## 📱 Responsive Design

Tất cả các trang đều responsive và tối ưu cho:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🚀 Deployment

Dự án sẵn sàng để deploy lên:
- Vercel
- Netlify
- Railway
- AWS Amplify

## 📝 License

MIT License - Xem file LICENSE để biết thêm chi tiết.
