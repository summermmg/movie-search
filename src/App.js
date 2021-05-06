import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Layout from './components/Layout'

function App() {
  return (
    <div>    
      <Navbar />
      <Layout>
        <Header />
      </Layout>

    </div>

  )
}

export default App;