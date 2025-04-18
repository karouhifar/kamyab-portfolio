import React, { ReactNode } from 'react'

function ParallaxLayout({
  children,
  props,
}: {
  children: ReactNode;
  props: any;
}) {
  return <div>{children}</div>;
}

export default ParallaxLayout