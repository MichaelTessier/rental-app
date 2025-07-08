import { BrowserRouter, Route, Routes } from "react-router"
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from "./components/pages/Home"
import Car from "./components/pages/Car"
import Register from "./components/pages/Auth/Register"
import Login from "./components/pages/Auth/Login"
import { Toaster } from "./components/shadcn/sonner"


function App() {

  return (
    <>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen justify-between bg-stone-50">

            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/car/:id" element={<Car />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
              {/* <Route path="/me/bookings" element={<MyBookings />} /> */}
              {/* <Route path="/me/profile" element={<UserProfile />} /> */}
            </Routes>
            <Footer />
            <Toaster />
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
