import { Grid, Box, Button } from "@mui/material";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { GroupsList } from "../../src/components/containers/GroupsList/GroupsList";
import Breadcrumbs from "../../src/components/ui/Breadcrumbs/breadcrumbs";
import PageTitle from "../../src/components/ui/PageTitle/PageTitle";
import Wrapper from "../../src/components/ui/Wrapper/wrapper";
import { useAuth } from "../../src/hooks/useUser";
import { GroupProps, getGroups } from "../api/group";

const GroupsPage: FC = () => {
  const [groups, setGroup] = useState<GroupProps[]>([]);
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    getGroups()
      .then((groups) => setGroup(groups))
      .catch((error) => toast.error("Something wrong happend", error));
  }, []);

  return (
    <Wrapper>
      <Grid container component="main">
        <Grid item>
          <Breadcrumbs breadcrumbText={t("titles.groups")} />
          <PageTitle title={t("titles.groups")} />

          <Box>
            <Link href="/groups/create" passHref>
              <Button variant="contained">{t("titles.groupsCreate")}</Button>
            </Link>
          </Box>
          <GroupsList groups={groups} currentUser={user} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};
export default GroupsPage;
