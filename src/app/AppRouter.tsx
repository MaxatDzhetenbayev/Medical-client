import { createBrowserRouter } from "react-router-dom";

// Layouts
import { BaseLayout, LayoutWithSidedar } from "./layouts";

// Paages
import {
  ContactPage,
  FactPage,
  MainPage,
  QuestionsPage,
  QuizPage,
} from "../pages";

export const AppRouter = () =>
  createBrowserRouter([
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
    {
      element: LayoutWithSidedar,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/facts",
          element: <FactPage />,
        },
        {
          path: "/questions",
          element: <QuestionsPage />,
        },
        {
          path: "/quiz",
          element: <QuizPage />,
        },
        {
          path: "/contacs",
          element: <ContactPage />,
        },
      ],
    },
  ]);
