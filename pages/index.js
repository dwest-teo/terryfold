// @flow
import React from 'react';
import Head from 'next/head';
import YouTube from 'react-youtube';

export default () => (
  <div>
    <Head>
      <title>Terryfold</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <YouTube
      videoId="JjPUfHEGkwM"
      opts={{
        playerVars: {
          autoplay: 1,
        },
      }}
    />
    <style jsx>{`
      div {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
    </style>
  </div>
);
