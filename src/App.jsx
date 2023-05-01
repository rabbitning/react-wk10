import './App.css'
import 'antd/dist/reset.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import { feedImages } from './api'

feedImages()

const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}