# Template Hub

A comprehensive, full-featured template management and discovery platform built with React, TypeScript, and Vite.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [User Roles](#user-roles)
- [Key Pages & Routes](#key-pages--routes)
- [State Management](#state-management)
- [Custom Hooks](#custom-hooks)
- [Contributing](#contributing)

---

## Overview

Template Hub is a modern web application that enables users to browse, create, manage, and collaborate on code templates. The application features a sophisticated authentication system with role-based access control, allowing different user types to interact with the platform based on their permissions.

The platform provides:
- **Public Interface**: For browsing and discovering templates
- **Admin Dashboard**: For managing templates, employees, media, and users
- **Secure Authentication**: With email verification, password reset, and session persistence

---

## Features

### 🔐 Authentication & Authorization
- User registration (public users and developers)
- JWT-based authentication
- Email verification system
- Forgot password & reset functionality
- Change password capability
- Session persistence with Redux Persist
- Role-Based Access Control (Admin, Developer, Editor, Author, User)
- Private route protection

### 👥 User Management
- User profile management and editing
- Employee creation and management
- Role assignment (Editor/Author permissions)
- User information display

### 📚 Template Management
- Create, read, update, and delete templates
- Advanced template filtering and search
- Template status management
- Support for multiple images per template
- Source code links (Frontend/Backend)
- SEO meta tags (title, description, keywords)
- Technology stack tagging
- Pricing and discount management
- Responsive design indicator

### 🎨 Public Client Interface
- Home page with template showcase
- Template browsing and discovery
- Template detail pages
- About and Contact pages
- User profile page
- Responsive design
- Shimmer loading animations

### 📊 Admin Dashboard
- Dashboard overview
- Admin profile management
- Media management (upload/view)
- Employee management (create, list, assign roles)
- Advanced template management
- Filter templates by various criteria
- Sidebar navigation
- Protected routes with authorization

### 💬 User Experience
- Toast notification system (success, error, info)
- Dialog/Modal components
- Shimmer loading UI
- Responsive layouts
- Error page handling
- Suspense-based page transitions

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | React 18.2+ |
| **Language** | TypeScript 5.0+ |
| **Build Tool** | Vite 4.4+ |
| **Routing** | React Router v6 |
| **State Management** | Redux Toolkit + Redux Persist |
| **Styling** | CSS Modules |
| **Icons** | React Icons |
| **Package Manager** | npm/yarn |
| **Code Quality** | ESLint with TypeScript support |

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd templateHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```

---

## Getting Started

### Development Server

Start the development server with HMR (Hot Module Replacement):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## Available Scripts

```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build production bundle with TypeScript check |
| `npm run lint` | Check code quality with ESLint |
| `npm run preview` | Preview production build |

---

## Project Structure

```
src/
├── components/
│   ├── client/              # Client-side components
│   │   ├── ClientLayout/
│   │   ├── DialogBox/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── TemplateCard/
│   ├── dashboard/           # Admin dashboard components
│   │   ├── DashLayout/
│   │   ├── LogDownloader/
│   │   └── Sidebar/
│   ├── global/              # Shared global components
│   │   ├── Layout/
│   │   ├── Persist/
│   │   ├── ProtectPrivate/
│   │   ├── Register/
│   │   └── ToastMsg/
│   └── shimmerUI/           # Loading skeleton components
│       ├── ShimmerDashboard
│       └── TemplateCardShimmer/
├── pages/
│   ├── ClientUI/            # Public user pages
│   │   ├── AboutPage/
│   │   ├── ContactPage/
│   │   ├── HomePage/
│   │   ├── ProfilePage/
│   │   └── TemplatePage/
│   ├── DashboardUI/         # Admin dashboard pages
│   │   ├── AdminProfilePage/
│   │   ├── DashboardPage/
│   │   ├── EmployeeManagePages/
│   │   ├── MediaPage/
│   │   └── TemplateManagePages/
│   └── GlobalUI/            # Authentication pages
│       ├── ErrorPage/
│       ├── ForgotPasswordPage/
│       ├── LoginPage/
│       ├── RegisterPage/
│       ├── ResetPasswordPage/
│       └── VerifyAccountPage/
├── hooks/                   # Custom React hooks
│   ├── useLogin
│   ├── useRegister
│   ├── useTemplate
│   ├── useEmployee
│   └── (20+ more hooks)
├── store/                   # Redux store
│   ├── authSlice.ts
│   ├── toastSlice.ts
│   ├── rootReducer.ts
│   └── store.ts
├── utils/
│   ├── constant.ts
│   ├── helper.ts
│   └── types.ts
├── App.tsx                  # Main app with routes
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

---

## User Roles

The application implements a comprehensive role-based access control system:

| Role | Permissions |
|------|------------|
| **Admin** | Full access to dashboard, manage all users and templates, media management |
| **Developer** | Register, create/manage own templates, access dashboard |
| **Editor** | Edit templates assigned by admin, access assigned content |
| **Author** | Create and manage content, limited dashboard access |
| **User** | Public access to browse templates, create account |

---

## Key Pages & Routes

### 🌐 Public Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Main landing page with template showcase |
| `/template/:slug` | TemplatePage | Template details and information |
| `/about` | AboutPage | About the platform |
| `/contact` | ContactPage | Contact form |
| `/profile` | ProfilePage | User profile view |
| `/login` | LoginPage | User login |
| `/register` | RegisterPage | User registration |
| `/register-developer` | RegisterPage | Developer registration |
| `/forgot-password` | ForgotPasswordPage | Password recovery initiation |
| `/reset-password/:token` | ResetPasswordPage | Password reset with token |
| `/verify-account` | VerifyAccountPage | Email verification |

### 🔒 Protected Dashboard Routes

| Route | Component | Purpose | Role |
|-------|-----------|---------|------|
| `/dashboard` | DashboardPage | Dashboard overview | Admin/Developer |
| `/dashboard/users/profile` | AdminProfilePage | Profile management | Admin/Developer |
| `/dashboard/media` | MediaPage | Media management | Admin |
| `/dashboard/employees` | EmployeeListsPage | Employee management | Admin |
| `/dashboard/employee/create` | CreateEmployeePage | Create new employee | Admin |
| `/dashboard/templates` | TemplateListsPage | All templates list | Admin/Developer |
| `/dashboard/templates/:filter` | TemplateListsPage | Filtered templates | Admin/Developer |
| `/dashboard/templates/create` | CreateTemplatePage | Create template | Admin/Developer |
| `/dashboard/templates/:slug/:id/edit` | TemplateEditPage | Edit template | Admin/Developer |

---

## State Management

The application uses Redux with Redux Toolkit for state management:

### Auth Slice
```typescript
interface AuthState {
  isAuthenticated: boolean;
  userInfo: {
    _id?: string;
    name?: string;
    email?: string;
    roles?: Role[];
  }
}
```

### Toast Slice
Manages notification messages with type (success, error, info) and duration.

### Persist
Redux Persist automatically saves and restores state from localStorage, enabling session persistence across page refreshes.

---

## Custom Hooks

The application includes 20+ custom hooks for:

- **Authentication**: `useLogin`, `useRegister`, `useLogout`, `useChangePassword`, `useForgotPassword`, `useResetPassword`, `useVerificationAccount`, `useRefresh`
- **Templates**: `useTemplate`, `useTemplateCreate`, `useTemplateEditHOH`, `useUpdateTemplate`, `useTemplateFilter`, `useUserTemplate`, `useTemplateDataHelper`
- **Users**: `useEmployee`, `useUserInfo`, `useRoleAccess`
- **State**: `usePersist`, `useToast`
- **Utilities**: `useCookiesRemover`

Each hook encapsulates business logic, API calls, and state management for specific features.

---

## Performance Features

- **Lazy Loading**: All pages are lazy-loaded with React.lazy for optimal bundle size
- **Code Splitting**: Routes split automatically at component boundaries
- **Suspense**: Fallback UI with shimmer animations during loading
- **CSS Modules**: Scoped styling prevents conflicts and reduces CSS footprint
- **HMR**: Hot Module Replacement for instant feedback during development

---

## Development Best Practices

- **TypeScript**: Full type safety throughout the application
- **Components**: Functional components with hooks
- **State**: Centralized Redux store with Redux Toolkit for simplified setup
- **Styling**: CSS Modules for component-scoped styles
- **Code Quality**: ESLint with TypeScript support
- **Router**: Nested routes for better organization
- **Error Handling**: Global error boundary and error pages

---

## Contributing

### Getting Started with Development

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Style

- Follow ESLint rules
- Use TypeScript for type safety
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

---

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Build Fails
Ensure TypeScript compilation passes:
```bash
npm run build
```

### ESLint Errors
Fix linting issues:
```bash
npm run lint
```

---

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Last Updated**: January 15, 2026
