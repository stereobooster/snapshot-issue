import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';

const LoadingWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Loading = styled.p`
  font-size: 48px;
  text-align: center;
  margin: auto;
`

export default function AsyncLoad(opts) {
  return Loadable(Object.assign({
    loading: () => <LoadingWrapper><Loading>Loading...</Loading></LoadingWrapper>,
    delay: 200,
  }, opts));
}
