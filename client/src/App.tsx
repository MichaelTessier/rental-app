import { BrowserRouter, Route, Routes } from "react-router"
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from "./components/pages/Home"


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen justify-between bg-gray-100">

          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/register" element={<Register />} /> */}
              {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
              {/* <Route path="/me/bookings" element={<MyBookings />} /> */}
              {/* <Route path="/me/profile" element={<UserProfile />} /> */}
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
