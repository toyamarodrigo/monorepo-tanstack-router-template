import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "@/web/route-tree.gen";

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
