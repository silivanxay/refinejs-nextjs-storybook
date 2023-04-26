import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { MemoryRouter, Routes, Route } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const RefineWithoutLayout = (Story) => (
  <MemoryRouter>
      <Refine
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          routerProvider={routerProvider}
          resources={[
              {
                  name: "blog_posts",
                  list: "/blog_posts",
              },
          ]}
      >
          <Routes>
              <Route index element={<NavigateToResource />} />

              <Route path="blog_posts">
                  <Route index element={<Story />} />
              </Route>
          </Routes>
      </Refine>
  </MemoryRouter>
);
