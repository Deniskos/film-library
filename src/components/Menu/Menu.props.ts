import React from 'react';

export interface MenuProps {
      exitHandler: () => void;
      loginRef: React.RefObject<HTMLInputElement | null>;
}