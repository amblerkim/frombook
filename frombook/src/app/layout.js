import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "From.",
  description: "Generated by FROM.",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, {
    cache: `no-store`,
  });
  const topics = await resp.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">from.</Link>
        </h1>
        <h2>안녕하세요. 박소영님 오늘은 50번 째 기록 입니다.</h2>

        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
