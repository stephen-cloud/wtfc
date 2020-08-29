import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      {/* <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      /> */}
      <Container text>
        <Header inverted as="h1">Write</Header>
        <Header inverted as="h1">The</Header>
        <Header inverted as="h1">Fucking</Header>
        <Header inverted as="h1">Code</Header>
      </Container>
    </Segment>
  </div>;

export default withLayout(IndexPage);
