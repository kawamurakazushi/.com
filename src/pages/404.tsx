import * as React from "react";
import { memo } from "react";

import Layout from "../components/layout";

const NotFoundPage = memo(() => (
  <Layout breadcrumbs={[]}>
    <h1>404 NOT FOUND</h1>
  </Layout>
));

export default NotFoundPage;
