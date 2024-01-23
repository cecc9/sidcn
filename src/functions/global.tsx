import React from 'react';

type ChildType =
  | React.ReactElement
  | React.ReactChild
  | React.ReactNode
  | string
  | number
  | null;

export function isText(child: ChildType): boolean {
  if (child === null) {
    return false;
  } else if (React.isValidElement(child)) {
    return false;
  } else if (typeof child === 'string' || typeof child === 'number') {
    return true;
  } else {
    return false; // Add 'return' here
  }
}
