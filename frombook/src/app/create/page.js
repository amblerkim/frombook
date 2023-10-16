"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // onSubmit 이 실행 됐을 때 path 가 변경되지 않도록
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, options)
          .then((res) => res.json())
          .then((result) => {
            // console.log(result);
            const lastid = result.id;
            router.push(`/read/${lastid}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea type="text" name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input variant="outlined" type="submit" value="create" />
      </p>
    </form>
  );
}
