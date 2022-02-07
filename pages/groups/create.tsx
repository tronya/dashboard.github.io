import { Box, TextField, Button, Typography } from "@mui/material";
import PageTitle from "../../src/components/ui/PageTitle/PageTitle";
import Wrapper from "../../src/components/ui/Wrapper/wrapper";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import SelectableUsers from "../../src/components/ui/SelectableUsers/SelectableeUsers";
import { red } from "@mui/material/colors";
import { useAuth } from "../../src/hooks/useUser";
import { setGroup } from "../api/group";
import { AuthUserContextProps } from "../../src/models/auth.model";
import { toast } from "react-toastify";
import Breadcrumbs from "../../src/components/ui/Breadcrumbs/breadcrumbs";

export interface GroupFormFields {
  name: string;
  users: string[];
}

interface GroupFormProps {
  fields: GroupFormFields;
  user: AuthUserContextProps;
}

const onCreateGroup = ({ fields, user }: GroupFormProps) => {
  setGroup(fields, user)
    .then(() => {
      toast.success(`${fields.name} is successfully creeated!`);
    })
    .catch((error) => {
      toast.error("error", error);
    });
};

const GroupsCreatePage = () => {
  const { t } = useTranslation();
  const user = useAuth();
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(4, "Group name should be of minimum 4 characters length")
      .required("Name is required"),
    users: yup
      .array()
      .min(1, "You should select minimum one User")
      .required("Users should be selected"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      users: [],
    },
    validationSchema: validationSchema,
    onSubmit: (fields) => onCreateGroup({ fields, user }),
  });

  return (
    <Wrapper>
      <Breadcrumbs breadcrumbText={t("titles.groups")} />
      <PageTitle title={t("titles.groupsCreate")} />
      <Box display="flex" flexDirection="column" width={1} sx={{ mt: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Group name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <SelectableUsers
            selectedUsers={(v) => {
              formik.setFieldValue("users", v);
            }}
          />
          {!!formik.getFieldMeta("users").touched &&
            !!formik.getFieldMeta("users").error && (
              <Typography
                variant="caption"
                display="block"
                color={red[500]}
                gutterBottom
              >
                {formik.getFieldMeta("users").error}
              </Typography>
            )}
          <Button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("buttons.create")}
          </Button>
        </form>
      </Box>
    </Wrapper>
  );
};
export default GroupsCreatePage;
