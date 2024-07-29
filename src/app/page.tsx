import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import Loader from "~/components/loader";
import {
  Example,
  ExampleColDef,
} from "~/components/tables/column-defs/example-col-def";
import { DataTable } from "~/components/tables/data-table";
import { api, HydrateClient } from "~/trpc/server";

async function getData(): Promise<Example[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "728ed52f",
          title: "Example 1",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 1,
        },
        {
          id: "728ed52f1",
          title: "Example 2",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 2,
        },
        {
          id: "728ed52f4",
          title: "Example 1",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 3,
        },
        {
          id: "728ed52f123",
          title: "Example 3",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 1,
        },
        {
          id: "123123",
          title: "Example 1",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 1,
        },
        {
          id: "728ed12312352f",
          title: "Example 1",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 1,
        },
        {
          id: "1231231qwqeqwe",
          title: "Example 1",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 1,
        },
        {
          id: "728ed5qweqwe1232f",
          title: "Example 1",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 1,
        },
        {
          id: "728ed123123qwe52f",
          title: "Example 1",
          status: "pending",
          subtitle: "This is an example subtitle.",
          number: 1,
        },
        // ...
      ]);
    }, 500);
  });
}

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  const data = await getData();

  return (
    <main>
      <Loader />
      <DataTable caption="Table Example 1" data={data} columns={ExampleColDef} />
      {/* <DataTable data={data} columns={ExampleColDef} /> */}
    </main>
  );
}
