import * as React from 'react';

import { styled, StyledContainer } from 'styledComponents';
import { BasicExample } from 'examples';
import { CodeViewer } from 'components';

const basicRaw = require('!raw-loader!examples/BasicExample.tsx');
const axuiLogo = require('assets/axui-logo.png');
const GitHubButton = require('react-github-button');

const Component = styled.div`
  .app-header {
    background: rgb(19, 59, 93);
    color: #fff;
    padding-bottom: 3em;
    margin-bottom: 2em;

    .logo-img {
      width: 120px;
      background: #f3f3f3;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      padding-bottom: 5px;
      overflow: hidden;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
      img {
        width: 100%;
        display: block;
      }
    }
    h1 {
      color: #fff;
      font-size: 36px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
      font-family: 'Montserrat', sans-serif;
    }

    .github-btn {
      .gh-count {
        margin-right: 1em;
      }
    }

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
`;

interface IProps {}
interface IState {}
class Index extends React.Component<IProps, IState> {
  render() {
    return (
      <Component>
        <header className={'app-header'}>
          <StyledContainer>
            <div className={'logo-img'}>
              <img src={axuiLogo} />
            </div>
            <h1>axui-contextmenu</h1>
            <div>
              <GitHubButton
                type="stargazers"
                size="large"
                namespace="jsdevkr"
                repo="axui-contextmenu"
              />{' '}
              <GitHubButton
                type="forks"
                size="large"
                namespace="jsdevkr"
                repo="axui-contextmenu"
              />
            </div>
          </StyledContainer>
        </header>

        <StyledContainer>
          <h2>Installation</h2>

          <CodeViewer>npm install axui-contextmenu</CodeViewer>

          <CodeViewer
            code={`
import 'axui-contextmenu/style.css';
import ContextMenu from 'axui-contextmenu';
`}
          />

          <h2>basic</h2>
          <BasicExample />

          <CodeViewer code={basicRaw} />
        </StyledContainer>
      </Component>
    );
  }
}

export default Index;
