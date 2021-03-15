import Head from "next/head";
import Link from "next/link";

export default function Home(props:any) {

  return (
    <div className="container">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
      <Link href="/home" >Link to home</Link>
    </div>
  );
}
