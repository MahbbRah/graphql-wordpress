import { css } from 'emotion';
import styled from 'react-emotion';
import theme from 'styles/theme';

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.75px;
  line-height: 24px;
  margin: 0 0 ${p => p.theme.padding}px;

  & a {
    color: ${p => p.theme.colors.subhead};
    text-decoration: none;
  }
`;

export const Embed = styled.figure`
  cursor: pointer;
  display: block;
  margin: 0 0 ${p => p.theme.padding}px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: ${p => p.width}px;

  & figcaption {
    display: none;
  }

  & img {
    height: auto;
    max-width: 100%;
    position: relative;
    z-index: 1;
  }

  &::before {
    background: ${theme.colors.pink};
    border-radius: 10px;
    content: ' ';
    height: 52px;
    left: 50%;
    margin: -21px 0 0 -48px;
    opacity: 0.8;
    position: absolute;
    top: 50%;
    width: 76px;
    z-index: 2;
  }

  &::after {
    border-bottom: 10px solid transparent;
    border-left: 20px solid ${theme.colors.white};
    border-top: 10px solid transparent;
    content: ' ';
    height: 0;
    left: calc(50% + 31px);
    margin: -21px 0 0 -48px;
    position: absolute;
    top: calc(50% + 16px);
    width: 0;
    z-index: 3;
  }

  &:hover {
    &::before {
      background: ${theme.colors.black};
    }
  }
`;

export const ThumbWrapper = styled.figure`
  margin: 0 0 ${p => p.theme.padding}px;
  max-width: 100%;
  overflow: hidden;

  & img {
    height: auto;
    max-width: 100%;
    position: relative;
    z-index: 1;
  }
`;

export const iframeClass = css`
  margin: 0 0 20px;
`;

// adjust aspect ratio from 4:3 to 16:9
export const thumb640Class = css`
  margin: -60px 0;
`;

export const thumb480Class = css`
  margin: -49px 0;
`;
