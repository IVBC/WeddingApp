import { useSelector, useDispatch } from 'react-redux';

import createRouter from '~/routes';

import { signOut } from '~/store/modules/auth/actions';

let control = false;
export default function App() {
  const dispatch = useDispatch();

  if (!control) {
    dispatch(signOut());
    control = true;
  }
  //
  const signed = useSelector((state) => state.auth.signed);

  return createRouter(signed);
}
