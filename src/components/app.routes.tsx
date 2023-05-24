import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AddPersonalData = lazy(() => import("page1"));
const AddAccessData = lazy(() => import("page2"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<AddPersonalData></AddPersonalData>}></Route>
        <Route
          path="page2"
          element={<AddPersonalData></AddPersonalData>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
