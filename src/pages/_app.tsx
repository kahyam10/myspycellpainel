import App, { AppContext, AppInitialProps } from "next/app";
import React from "react";
import ThemeContainer from "../contexts/theme/ThemeContainer";
import store from "../store";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

class MyApp extends App<AppInitialProps> {
  public static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps: pageProps};
  }

  public render() {
    const { Component, pageProps} = this.props;

    return (
      <Provider store={store}>
        <ThemeContainer>
          <Component {...pageProps} />
        </ThemeContainer>
      </Provider>
    );
  }
}
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
