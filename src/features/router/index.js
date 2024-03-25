import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../page/mainPage/mainPage";

import { MeshPage } from "../../page/meshPage/meshPage";
export const router = createBrowserRouter([
    {
        element: <MainPage />,
        path: "/",
        errorElement: <>404</>
    },
    {
        element: <MeshPage />,
        path: "/mesh",
        // errorElement: <>404</>
    },

])