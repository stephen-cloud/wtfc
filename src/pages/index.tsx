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
        <Header inverted as="h3">No, seriously dude, just</Header>
        <Header inverted as="h1">Write</Header>
        <Header inverted as="h1">The</Header>
        <Header inverted as="h1">Fucking</Header>
        <Header inverted as="h1">Code</Header>
      </Container>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="4" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header>Stop meeting, start coding</Header>
            <p>WTFC is all about going for it.
            Some people like to have meetings to decide things where the only thing
              they can agree on is to have another meeting.</p>

            <p><em>Be the guy who writes code instead.</em></p>
          </Grid.Column>
          <Grid.Column>
            <Header> Permission/forgiveness is a spectrum</Header>
            <p> If something needs doing and you know how, show people proof, gather people around the idea, and do it.</p>

            <p>If what you did totally works but people get mad anyway, that's on them.</p>

            <p><em>Be the guy who doesn't take it personally.</em></p>
          </Grid.Column>
          <Grid.Column>
            <Header > Line up collaborators and advocates</Header>
            <p>Your teammates, your boss, their boss, whoever's interested. When it's time to roll out what you did, you'll already have support. </p>

            <p><em>Be the go-to collaborator guy.</em></p>
          </Grid.Column>
          <Grid.Column>
            <Header > Expect and accept "no" sometimes</Header>
            <p>What you did either isn't that great after all, someone beat you to the punch, or the team's
              just determined to do it their way instead.</p>

            <p><em>Be the guy who picks something new and starts fresh</em></p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  </div>;

export default withLayout(IndexPage);
