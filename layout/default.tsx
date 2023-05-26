import PageHeader from "components/partials/header";
import PageFooter from "components/partials/footer";
import SpeedDial from "components/SpeedDial";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({children}: Props) {
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
      <div className="relative">
        <PageHeader />
        <SpeedDial />
        <div className="page-body fixed min-w-full top-16 bottom-16 h-[calc(100vh-theme(spacing.16))] overflow-auto">{children}</div>
        <PageFooter />
      </div>
    </>
  );
}
