import { Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../../src/components/ui/Breadcrumbs/breadcrumbs';
import PageTitle from '../../../src/components/ui/PageTitle/PageTitle';
import Wrapper from '../../../src/components/ui/Wrapper/wrapper';
import { Group } from '../../../src/models/groups.model';

interface GroupWrapperProps {
  currentGroup?: Group;
  otherBreadcrumbs?: ReactElement[];
}

const GroupWrapper: FC<GroupWrapperProps> = ({
  children,
  currentGroup,
  otherBreadcrumbs,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Breadcrumbs
        breadcrumbText={t('group.groups')}
        otherBreadcrumbs={[
          <Typography key="group-detail" color="text.primary">
            {t('group.groupDetails')}
          </Typography>,
          ...(otherBreadcrumbs ?? []),
        ]}
        breadcrumbTextHref="/groups"
      />
      <PageTitle title={`${t('group.groupDetails')}: ${currentGroup?.name}`} />
      {children}
    </Wrapper>
  );
};

export default GroupWrapper;
