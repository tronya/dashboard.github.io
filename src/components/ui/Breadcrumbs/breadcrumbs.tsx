import {
  Breadcrumbs as BreadcrumbsComponent,
  Link,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface BreadcrumbsProps {
  otherBreadcrumbs?: Element[];
  breadcrumbText: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  otherBreadcrumbs,
  breadcrumbText,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="dashboard"
      color="inherit"
      href="/"
      onClick={() => router.push("/")}
    >
      {t("dashboard.title")}
    </Link>,
    ...(otherBreadcrumbs ?? []),
    <Typography key={breadcrumbText} color="text.primary">
      {breadcrumbText}
    </Typography>,
  ];

  return (
    <BreadcrumbsComponent
      separator={<ChevronRightIcon />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </BreadcrumbsComponent>
  );
};

export default Breadcrumbs;
