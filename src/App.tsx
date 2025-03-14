import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MatchTracker from './components/MatchTracker'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MatchTracker />
    </QueryClientProvider>
  )
}

export default App
