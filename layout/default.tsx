import PageHeader from "components/partials/header";
import PageFooter from "components/partials/footer";
import SpeedDial from "components/SpeedDial";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({children}: Props) {
  return (
    <div>
      <PageHeader />
      <SpeedDial />
      <div className="page-body fixed min-w-full h-[calc(100vh-theme(spacing.20))] top-16 bottom-0">{children}</div>
      <PageFooter />
    </div>
  );
}
