import React, { Suspense, lazy , useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Loading from './components/Loading/Loading.jsx'


const Landing = lazy(() => import('./pages/Landing/Landing.jsx'))
const Gallery = lazy(() => import('./pages/Gallery/Gallery.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const ClientDashboard = lazy(() => import('./pages/ClientDasboard/ClientDasboard.jsx'))
const AdminCRM = lazy(() => import('./pages/AdminCRM/AdminCRM.jsx'))
const Login = lazy(() => import('./pages/Login/Login.jsx'))
const Register = lazy(() => import('./pages/Register/Register.jsx'))


function PrivateRoute({ children, isAuth, role, requiredRole }) {
    if (!isAuth) return <Navigate to="/login" replace />
    if (requiredRole && role !== requiredRole) return <Navigate to="/" replace />
    return children
  }



function App() {
    const [user, setUser] = useState({ isAuth: false, role: null }) // role: 'client' | 'admin'

return (
<div className="app-root cinematic-dark">
<Header user={user} setUser={setUser} />
<main>
<Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />

           
            <Route
              path="/client/*"
              element={
                <PrivateRoute isAuth={user.isAuth} role={user.role} requiredRole="client">
                  <ClientDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/*"
              element={
                <PrivateRoute isAuth={user.isAuth} role={user.role} requiredRole="admin">
                  <AdminCRM />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
</main>
<Footer />
</div>
)
}
export default App;