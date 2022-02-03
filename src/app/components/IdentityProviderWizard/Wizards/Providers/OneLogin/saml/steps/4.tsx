import React, { FC } from "react";
import { InstructionProps, Step, StepImage } from "@wizardComponents";
import * as Images from "@app/images/onelogin";
import { UrlForm } from "@app/components/IdentityProviderWizard/Wizards/components";
import { API_RETURN_PROMISE } from "@app/configurations/api-status";
import { UrlCard } from "@app/components/IdentityProviderWizard/Wizards/components";

type Props = {
  url: string;
  handleFormSubmit: ({ url }: { url: string }) => API_RETURN_PROMISE;
};

export const Step4: FC<Props> = ({ url, handleFormSubmit }) => {
  const instructions: InstructionProps[] = [
    {
      text: "In the “SSO” section, click to copy the “Issuer URL” and paste below.",
      component: <StepImage src={Images.OneLogin_SAML_6A} alt="Step 4.1" />,
    },
    {
      component: (
        <UrlCard>
          <UrlForm
            url={url}
            urlLabel="Issuer Url"
            handleFormSubmit={handleFormSubmit}
          />
        </UrlCard>
      ),
    },
  ];

  return (
    <Step
      title="Step 4: Upload OneLogin IdP Information"
      instructionList={instructions}
    />
  );
};
