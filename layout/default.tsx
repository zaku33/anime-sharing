import PageHeader from "components/partials/header";
import PageFooter from "components/partials/footer";
import SpeedDial from "components/SpeedDial";
import Head from "next/head";
import PageBody from "components/partials/body";
import {NodeProps} from "type/layout";

export default function DefaultLayout(props: NodeProps) {
  return (
    <>
      <Head>
        <title>ANIME SHARING</title>
        <meta name="theme-color" content="#dfb03f" />
        <meta name="msapplication-navbutton-color" content="#dfb03f" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#dfb03f" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <div>
        <PageHeader />
        <SpeedDial />
        <PageBody>{props.children}</PageBody>
        <PageFooter />
      </div>
    </>
  );
}
