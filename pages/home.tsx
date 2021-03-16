import Head from "next/head";
import Link from "next/link";
import {Dropdown} from "semantic-ui-react";
import s from "../styles/pages/home.module.scss";

export default function Home() {

  
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dropdown text={"Home Settings"}>
          <Dropdown.Menu>
            <Dropdown.Item text={"Selam"}
            className={s.item}
            onClick={() => console.log("Selam")}/>
            <Dropdown.Item text={"Naber"}/>
            <Dropdown.Item text={"Ke"}/>
          </Dropdown.Menu>
      </Dropdown>
     <Link href={"/"}>Back to Landing</Link>
    </div>
  );
}
