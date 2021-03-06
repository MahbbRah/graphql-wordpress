import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import { graphql } from 'react-apollo';
import WrapperQuery from 'graphql/Wrapper_Query.graphql';
import Header from 'components/Header';
import Home from 'routes/Home';
import Single from 'routes/Single';
import Date from 'routes/Date';
import Term from 'routes/Term';
import Page from 'routes/Page';
import Error from 'components/Error';
import Loading from 'components/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
});

/* eslint-disable react/prop-types */

@graphql(WrapperQuery, {
  options: () => ({
    variables: {
      menuID: 'TmF2TWVudToy',
    },
  }),
})
export default class Wrapper extends Component {
  render() {
    const { data: { loading, error } } = this.props;

    if (error) {
      return <Error error={error} />;
    }

    if (loading) {
      return <Loading />;
    }

    const { viewer: { settings, navMenu } } = this.props.data;

    return (
      <View style={styles.container}>
        <Header {...{ settings, navMenu }} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:year(\d{4})/:month(\d{2})/:day(\d{2})/:id" component={Single} />
          <Route path="/:category(music)/:slug" component={Term} />
          <Route path="/:tag(tag)/:slug" component={Term} />
          <Route path="/:year(\d{4})/:month(\d{2})?/:day(\d{2})?" component={Date} />
          <Route path="/:slug" component={Page} />
        </Switch>
      </View>
    );
  }
}
