import React, { CSSProperties, FC } from "react";
import {
  PageSection,
  PageSectionVariants,
  Flex,
  FlexItem,
  Button,
} from "@patternfly/react-core";
import { generatePath, Link, useParams } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { PATHS } from "@app/routes";

interface Props {
  logo: string;
  logoStyles?: CSSProperties;
}

export const Header: FC<Props> = ({ logo, logoStyles = {} }) => {
  const { keycloak } = useKeycloak();
  const { realm } = useParams();

  return (
    <PageSection variant={PageSectionVariants.light}>
      <Flex alignItems={{ default: "alignItemsCenter" }}>
        <FlexItem>
          <img
            className="step-header-image"
            src={logo}
            alt="Logo"
            style={logoStyles}
          />
        </FlexItem>

        <FlexItem align={{ default: "alignRight" }}>
          <Link to={generatePath(PATHS.idpSelector, { realm })}>
            <Button variant="link" isInline>
              IDP Selector
            </Button>
          </Link>
        </FlexItem>
        <FlexItem>
          <Link to={generatePath(PATHS.dashboard, { realm })}>
            <Button variant="link" isInline>
              Dashboard
            </Button>
          </Link>
        </FlexItem>
      </Flex>
    </PageSection>
  );
};
