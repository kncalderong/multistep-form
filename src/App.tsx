import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddsOn, PersonalInfo, Confirmation, SelectPlan, SharedLayoutForm, Summary } from './pages/form'
import ProtectedRoute from "./pages/form/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayoutForm />}>
          <Route index element={<PersonalInfo />} />
          <Route path="select-plan" element={
            <ProtectedRoute>
              <SelectPlan />
            </ProtectedRoute>
          } />
          <Route path="adds-on" element={
            <ProtectedRoute>
              <AddsOn />
            </ProtectedRoute>
            } />
          <Route path="summary" element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
            } />
          <Route path="confirmation" element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
            } />
          <Route path="*" element={<div> Not found ...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
