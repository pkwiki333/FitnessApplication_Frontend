import Exercise from "./Exercise";
import { useState } from "react";

import { useEffect } from "react";
import useExercises from "../../api/exercises";
import { useCallback } from "react";
import StateHandler from "../StateHandler";
import { useSearchParams } from "react-router-dom";

export default function ExercisesHOme() {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getExercises } = useExercises();
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      if (searchParams.get("search") === null) {
        searchParams.set("search", "");
      }
      const data = await getExercises(searchParams.get("search"));
      setExercises(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [getExercises, searchParams]);

  useEffect(() => {
    fetchData();
  }, [searchParams, fetchData]);

  return (
    <StateHandler loading={loading} error={error}>
      <br />
      <div>
        <br />
        <ul className="list-group">
          {exercises.map((item) => (
            <div className="col" key={item.id}>
              <Exercise {...item} />
              <br />
            </div>
          ))}
        </ul>
      </div>
    </StateHandler>
  );
}
