import {
  Breadcrumbs as BreadcrumbsComponent,
  Link,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbsProps {
  otherBreadcrumbs?: ReactElement[];
  breadcrumbText: string;
  breadcrumbTextHref?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  otherBreadcrumbs,
  breadcrumbText,
  breadcrumbTextHref,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="dashboard"
      color="inherit"
      href="/"
      onClick={() => router.push('/')}
    >
      {t('dashboard.title')}
    </Link>,
    <Typography
      key={breadcrumbText}
      color="text.primary"
      sx={{
        '&:hover': { cursor: otherBreadcrumbs?.length ? 'pointer' : 'default' },
      }}
      onClick={() =>
        otherBreadcrumbs?.length &&
        breadcrumbTextHref &&
        router.push(breadcrumbTextHref)
      }
    >
      {breadcrumbText}
    </Typography>,
    ...(otherBreadcrumbs ?? []),
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
