import WelcomeMessage from "./components/welcome";
import StudentInfo from "./components/student-info";
import StudentSkill from "./components/skills";
function App() {
return (
<div className="App">
<div class="container-fluid">
<WelcomeMessage/>
<StudentInfo/>
<StudentSkill/>
</div>
</div>
);
}
export default App;
