import Head from "next/head";
import Link from "next/link";
import {Dropdown} from "semantic-ui-react";
import s from "../styles/pages/index.module.scss";

export default function Home(props:any) {

  return (
    <div className="container">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
      <Link href="/home" >Link to home</Link>
      <Dropdown text={"Home Settings"}>
          <Dropdown.Menu>
            <Dropdown.Item text={"Selam"}
            className={s.item}
            onClick={() => console.log("Selam")}/>
            <Dropdown.Item text={"Naber"}/>
            <Dropdown.Item text={"Ke"}/>
          </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
