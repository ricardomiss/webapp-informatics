import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FeaturedProyects } from "./pages/FeaturedProyects";
import { StudentLife } from "./pages/StudentLife";
import { RequirementsInscription } from "./pages/RequirementsInscription";
import { SuccessStories } from "./pages/SuccessStories";
import { FrequentQuestions } from "./pages/FrequentQuestions";
import { AcademicExperience } from "./pages/AcademicExperience";
import Header from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter basename="/webapp-informatics">
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/featured-proyects" element={ <FeaturedProyects /> }></Route>
            <Route path="/student-life" element={ <StudentLife /> }></Route>
            <Route path="/academic-experience" element={ <AcademicExperience /> }></Route>
            <Route path="/requirements-inscription" element={ <RequirementsInscription /> }></Route>
            <Route path="/success-stories" element={ <SuccessStories /> }></Route>
            <Route path="/frequent-questions" element={ <FrequentQuestions /> }></Route>
        </Routes>
    </BrowserRouter>
  )
}
