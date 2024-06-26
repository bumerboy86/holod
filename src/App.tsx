import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { MainPage } from "./Pages/MainPage";
import { ServicePage } from "./Pages/ServicePage";
// import { PricePage } from "./Pages/PricePage";
import { ContactsPage } from "./Pages/ContactsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<MainPage />} />
          <Route index path='/our-services' element={<ServicePage />} />
          {/* <Route index path='/price' element={<PricePage />} /> */}
          <Route index path='/contacts' element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
