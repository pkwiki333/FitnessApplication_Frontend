import { Route, Routes } from "react-router-dom";
import "./App.css";
import PerExercise from "./components/HomePage/PerExercise";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import PerWorkout from "./components/Workouts/PerWorkout";
import Workouts from "./components/Workouts/Workouts";
import CreateWorkouts from "./components/Workouts/CreateWorkouts";
import SelectWorkout from "./components/Workouts/SelectWorkout";
import OpgeslagenExercesesPerExercise from "./components/Workouts/OpgeslagenExercesesPerExercise";
import Main from "./components/Main";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/exercise_info/:id" element={<PerExercise />} />
          <Route path="/workout_info/:id" element={<PerWorkout />} />
          <Route path="/create_workout" element={<CreateWorkouts />} />
          <Route path="/select_workout/:id" element={<SelectWorkout />} />
          <Route
            path="/opgelsagen_exercise_info/:id"
            element={<OpgeslagenExercesesPerExercise />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
