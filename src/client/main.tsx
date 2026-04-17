import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from '@tanstack/react-router'
import './main.css'
import Header from './components/header'
import HomePage from './routes/home'
import DateTimePage from './routes/datetime'

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const datetimeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/datetime',
  component: DateTimePage,
})

const routeTree = rootRoute.addChildren([indexRoute, datetimeRoute])
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
