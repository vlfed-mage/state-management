import { useMachine } from '@xstate/react';

import todosMachine from '../state';

export const useTodos = () => useMachine(todosMachine);
