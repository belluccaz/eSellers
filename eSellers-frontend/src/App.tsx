import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { OrdersPage } from "./pages/OrdersPage/OrdersPage";
import { OrderDetailsPage } from "./pages/OrderDetailsPage/OrderDetailsPage";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { ProductCreatePage } from "./pages/ProductCreatePage/ProductCreatePage";
import { ProductEditPage } from "./pages/ProductEditPage/ProductEditPage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/orders/:id" element={<OrderDetailsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/create" element={<ProductCreatePage />} />
            <Route path="/products/edit/:id" element={<ProductEditPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* <Route path="?*" element={<NotFoundPage />} /> */}
            {/* Rotas protegidas dentro do layout */}
            <Route
              path="/*"
              element={
                <Routes>
                  <Route
                    path="dashboard"
                    element={
                      <PrivateRoute>
                        <DashboardPage />
                      </PrivateRoute>
                    }
                  />
                  {/* Outras rotas protegidas futuras aqui */}
                </Routes>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
