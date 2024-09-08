import {useMemo} from 'react';
import API from '../services/API';

export default function useAPI() {
  return useMemo(() => new API(), []);
}
