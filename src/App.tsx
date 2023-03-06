import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddsOn, PersonalInfo, Confirmation, SelectPlan, SharedLayoutForm, Summary } from './pages/form'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayoutForm />}>
          <Route index element={<PersonalInfo />} />
          <Route path="select-plan" element={<SelectPlan />} />
          <Route path="adds-on" element={<AddsOn />} />
          <Route path="summary" element={<Summary />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="*" element={ <div> Not found ...</div> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
